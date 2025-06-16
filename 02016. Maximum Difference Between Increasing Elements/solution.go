/**
 * Problem: 2016. Maximum Difference Between Increasing Elements
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maximumDifference(nums []int) int {
	// Initialize maximum difference to -1 (no valid pair found)
	maxDiff := -1
	// Track the minimum value seen so far
	minValue := nums[0]

	// Iterate through array starting from second element
	for j := 1; j < len(nums); j++ {
		// Check if current element can form a valid increasing pair
		if nums[j] > minValue {
			maxDiff = max(maxDiff, nums[j]-minValue)
		} else {
			minValue = nums[j]
		}
	}

	return maxDiff
}

// max is a helper function to find the maximum of two integers
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
