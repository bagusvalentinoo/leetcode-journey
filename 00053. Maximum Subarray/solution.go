/**
 * Problem: 53. Maximum Subarray
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxSubArray(nums []int) int {
	// Initialize max sum with first element
	maxSum := nums[0]

	// Initialize current running sum with first element
	currentSum := nums[0]

	// Iterate through the array starting from index 1
	for i := 1; i < len(nums); i++ {
		// If starting a new subarray at current element gives larger sum than extending
		if nums[i] > currentSum+nums[i] {
			// Start a new subarray from current element
			currentSum = nums[i]
		} else {
			// Extend existing subarray by adding current element
			currentSum = currentSum + nums[i]
		}

		// Update global maximum sum
		if currentSum > maxSum {
			maxSum = currentSum
		}
	}

	// Return maximum subarray sum
	return maxSum
}
