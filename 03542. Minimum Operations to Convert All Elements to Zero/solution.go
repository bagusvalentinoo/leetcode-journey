/**
 * Problem: 3542. Minimum Operations to Convert All Elements to Zero
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

func minOperations(nums []int) int {
	// Initialize an empty slice to keep track of the stack
	s := []int{}
	// Initialize the result variable to count the operations
	res := 0

	// Iterate through each element in the input array
	for _, a := range nums {
		// Remove elements from the stack that are greater than the current element
		for len(s) > 0 && s[len(s)-1] > a {
			s = s[:len(s)-1]
		}

		// Skip the current iteration if the element is zero
		if a == 0 {
			continue
		}
		// If the stack is empty or the top of the stack is less than the current element
		if len(s) == 0 || s[len(s)-1] < a {
			// Increment the operation count
			res++
			// Push the current element onto the stack
			s = append(s, a)
		}
	}

	// Return the total number of operations
	return res
}
