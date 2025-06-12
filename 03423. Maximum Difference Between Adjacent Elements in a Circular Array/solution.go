/**
 * Problem: 3423. Maximum Difference Between Adjacent Elements in a Circular Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func abs(x int) int {
	if x < 0 {
		return -x
	}

	return x
}

func maxAdjacentDistance(nums []int) int {
	n := len(nums)
	// Initialize max difference with the circular connection (last to first element)
	maxDiff := abs(nums[0] - nums[n-1])

	// Check all adjacent pairs in the array
	for i := 0; i < n-1; i++ {
		maxDiff = max(maxDiff, abs(nums[i]-nums[i+1]))
	}

	return maxDiff
}
