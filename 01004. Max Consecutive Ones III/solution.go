/**
 * Problem: 1004. Max Consecutive Ones III
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func longestOnes(nums []int, k int) int {
	// maxLength represents the maximum length of subarray with at most k zeros
	// oneCount tracks the number of ones in the current window
	// left is the left boundary of the sliding window
	maxLength, oneCount, left := 0, 0, 0

	for right := 0; right < len(nums); right++ {
		// Add the current element to our count of ones
		oneCount += nums[right]

		// If zeros in current window <= k, update max length
		if right-left+1-oneCount <= k {
			maxLength = max(maxLength, right-left+1)
		} else {
			// Window has too many zeros, shrink from left
			oneCount -= nums[left]
			left++
		}
	}

	return maxLength
}