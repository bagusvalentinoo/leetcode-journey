/**
 * Problem: 3903. Smallest Stable Index I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func firstStableIndex(nums []int, k int) int {
	// Get array length for iteration bounds
	n := len(nums)

	// Build suffix minimum array: suffixMin[i] = min(nums[i..n-1])
	suffixMin := make([]int, n)

	// Last element suffix min is itself
	suffixMin[n-1] = nums[n-1]

	// Fill suffix minima from right to left
	for i := n - 2; i >= 0; i-- {
		suffixMin[i] = min(suffixMin[i+1], nums[i])
	}

	// Track prefix maximum while scanning left to right
	prefixMax := 0

	// Check each index for stability condition
	for i, x := range nums {
		// Update prefix maximum to include current element
		prefixMax = max(prefixMax, x)

		// Compute instability score and check against k
		if prefixMax-suffixMin[i] <= k {
			return i
		}
	}

	// No stable index found
	return -1
}
