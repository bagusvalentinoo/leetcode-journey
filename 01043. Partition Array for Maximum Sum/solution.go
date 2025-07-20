/**
 * Problem: 1043. Partition Array for Maximum Sum
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxSumAfterPartitioning(arr []int, k int) int {
	// Get the length of the input array
	n := len(arr)
	
	// Initialize DP array where dp[i] represents the maximum sum for first i elements
	// Size is n+1 to handle 0-based indexing more easily
	dp := make([]int, n+1)

	// Iterate through each position in the array (1-indexed for DP)
	for i := 1; i <= n; i++ {
		// Track the maximum value in the current partition being considered
		maxVal := 0
		
		// Try all possible partition sizes from 1 to k (or until start of array)
		// j represents the size of the current partition
		for j := 1; j <= k && i-j >= 0; j++ {
			// Update maxVal with the maximum element in current partition
			// arr[i-j] is the element at the start of current partition
			maxVal = max(maxVal, arr[i-j])
			
			// Update dp[i] with the best sum possible:
			// dp[i-j] = best sum for elements before current partition
			// maxVal*j = contribution of current partition (max element * partition size)
			dp[i] = max(dp[i], dp[i-j]+maxVal*j)
		}
	}

	// Return the maximum sum for the entire array
	return dp[n]
}
