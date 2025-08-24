/**
 * Problem: 1493. Longest Subarray of 1's After Deleting One Element
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func longestSubarray(nums []int) int {
	// Initialize left and right pointers for the sliding window
	left, right := 0, 0
	// Count the number of zeroes in the current window
	zeroCount := 0

	// Iterate through the array using the right pointer
	for right < len(nums) {
		// If the current element is zero, increment zeroCount
		if nums[right] == 0 {
			zeroCount++
		}

		// Move the right pointer to expand the window
		right++

		// If there are more than one zero in the window, shrink the window from the left
		if zeroCount > 1 {
			// If the leftmost element is zero, decrement zeroCount
			if nums[left] == 0 {
				zeroCount--
			}
			// Move the left pointer to shrink the window
			left++
		}
	}

	// Return the length of the longest subarray with at most one zero removed
	return (right - 1) - left
}
