/**
 * Problem: 1458. Max Dot Product of Two Subsequences
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxDotProduct(nums1 []int, nums2 []int) int {
	// Get lengths of both arrays
	m, n := len(nums1), len(nums2)

	// DP arrays for current and previous rows
	current := make([]int, n+1)
	previous := make([]int, n+1)

	// Initialize DP arrays with minimum value
	for i := range current {
		current[i] = math.MinInt32
		previous[i] = math.MinInt32
	}

	// Process each element of nums1
	for i := 1; i <= m; i++ {
		// Process each element of nums2
		for j := 1; j <= n; j++ {
			// Calculate product of current pair
			currProduct := nums1[i-1] * nums2[j-1]

			// Update current[j] with four possibilities:
			// 1. Start new subsequence with current product
			// 2. Skip current element from nums1 (previous[j])
			// 3. Skip current element from nums2 (current[j-1])
			// 4. Extend previous subsequence (currProduct + max(0, previous[j-1]))
			current[j] = max(
				max(
					max(currProduct, previous[j]),
					current[j-1],
				),
				currProduct+max(0, previous[j-1]),
			)
		}
		// Swap arrays for next iteration
		current, previous = previous, current
	}

	// Return maximum dot product
	return previous[n]
}
