/**
 * Problem: 1218. Longest Arithmetic Subsequence of Given Difference
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func longestSubsequence(arr []int, difference int) int {
	// Create a hash array to store the length of the longest subsequence ending with a specific value.
	// The array size is 20001 to accommodate values from -10000 to 10000.
	hash := make([]int, 20001)
	// Initialize the variable to keep track of the maximum length found.
	maxLen := 0

	// Iterate through each number in the input array.
	for _, num := range arr {
		// Check if (num - difference) is out of the valid range.
		if num-difference < -10000 || num-difference > 10000 {
			// If out of range, start a new subsequence with length 1.
			hash[num+10000] = 1
		} else {
			// Otherwise, extend the subsequence by 1 from the previous value.
			hash[num+10000] = 1 + hash[num-difference+10000]
		}

		// Update the maximum length if the current subsequence is longer.
		if hash[num+10000] > maxLen {
			maxLen = hash[num+10000]
		}
	}

	// Return the length of the longest arithmetic subsequence found.
	return maxLen
}
