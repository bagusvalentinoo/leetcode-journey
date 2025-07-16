/**
 * Problem: 3201. Find the Maximum Length of Valid Subsequence I
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0g ms (Beats 100%)
 */

func maximumLength(nums []int) int {
	// countByParity tracks count of even numbers (index 0) and odd numbers (index 1)
	countByParity := [2]int{}

	// expectedParity tracks the expected parity for the next element in alternating sequence
	expectedParity := nums[0] & 1
	
	// alternatingLength tracks the length of current alternating subsequence
	alternatingLength := 0
	
	// Iterate through all numbers in the array
	for _, num := range nums {
		// Count occurrences of each parity (even/odd)
		countByParity[num&1]++
		
		// Check if current number matches expected parity for alternating sequence
		if num&1 == expectedParity {
			// Increment alternating sequence length
			alternatingLength++
			// Toggle expected parity for next element (0->1, 1->0)
			expectedParity = 1 - expectedParity
		}
	}
	
	// Return maximum of: alternating sequence, all even numbers, or all odd numbers
	return max(alternatingLength, countByParity[0], countByParity[1])
}
