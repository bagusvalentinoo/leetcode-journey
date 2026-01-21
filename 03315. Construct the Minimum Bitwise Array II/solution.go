/**
 * Problem: 3315. Construct the Minimum Bitwise Array II
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minBitwiseArray(nums []int) []int {
	// Initialize empty array for results
	result := make([]int, len(nums))

	// Loop through all numbers in input
	for i := 0; i < len(nums); i++ {
		// Get current number from input
		currentNum := nums[i]

		// Apply bitwise transformation formula
		if currentNum != 2 {
			result[i] = currentNum - ((currentNum+1)&(-currentNum-1))/2
		} else {
			// For number 2, set result to -1
			result[i] = -1
		}
	}

	// Return final transformed array
	return result
}
