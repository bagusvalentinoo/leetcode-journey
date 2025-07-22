/**
 * Problem: 1695. Maximum Erasure Value
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maximumUniqueSubarray(nums []int) int {
	// Initialize variables:
	// curSum: current sum of the unique subarray
	// maxSum: maximum sum found so far
	// left, right: window pointers for the sliding window
	// seen: boolean array to track if a number is in the current window
	var (
		curSum, maxSum, left, right int
		seen                        [10001]bool
	)

	// Iterate through the array with the right pointer
	for ; right < len(nums); right++ {
		n := nums[right]

		// If the number is already in the window, move the left pointer
		// and remove numbers from the window until the duplicate is removed
		if seen[n] {
			for ; left < right; left++ {
				n2 := nums[left]
				seen[n2] = false
				curSum -= n2

				// Stop removing when the duplicate is found
				if n == n2 {
					left++
					break
				}
			}
		}

		// Add the current number to the window
		seen[n] = true
		curSum += n
		// Update the maximum sum if needed
		maxSum = max(maxSum, curSum)
	}

	// Return the maximum sum of a unique subarray
	return maxSum
}
