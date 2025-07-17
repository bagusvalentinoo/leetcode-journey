/**
 * Problem: 1035. Uncrossed Lines
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxUncrossedLines(nums1 []int, nums2 []int) int {
	// Get the lengths of both input arrays
	m, n := len(nums1), len(nums2)
	
	// Create a 2D DP table with dimensions (m+1) x (n+1)
	// dp[i][j] represents max uncrossed lines between nums1[0:i] and nums2[0:j]
	dp := make([][]int, m+1)

	// Initialize each row of the DP table
	for i := range dp {
		dp[i] = make([]int, n+1)
	}

	// Fill the DP table using dynamic programming approach
	for i := 1; i <= m; i++ {
		for j := 1; j <= n; j++ {
			// If current elements match, we can form a new uncrossed line
			if nums1[i-1] == nums2[j-1] {
				// Add 1 to the result from previous positions (diagonal)
				dp[i][j] = dp[i-1][j-1] + 1
			} else {
				// If elements don't match, take maximum from either:
				// - excluding current element from nums1 (dp[i-1][j])
				// - excluding current element from nums2 (dp[i][j-1])
				dp[i][j] = max(dp[i][j-1], dp[i-1][j])
			}
		}
	}

	// Return the maximum number of uncrossed lines
	return dp[m][n]
}
