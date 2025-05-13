/**
 * Problem: 960. Delete Columns to Make Sorted III
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minDeletionSize(strs []string) int {
	// Return 0 if the input array is empty
	if len(strs) == 0 {
		return 0
	}
	
	strLength := len(strs[0])
	// dp[i] represents the max length of increasing subsequence ending at index i
	dp := make([]int, strLength)

	// Initialize dp array - each column by itself forms a subsequence of length 1
	for i := range dp {
		dp[i] = 1
	}

	// Build DP table - for each column, check if it can be added to previous subsequences
	for i := 1; i < strLength; i++ {
		for j := 0; j < i; j++ {
			// Check if column j can come before column i in all strings
			valid := true

			for k := 0; k < len(strs); k++ {
				// If any character in column j is greater than in column i, not valid
				if strs[k][j] > strs[k][i] {
					valid = false
					break
				}
			}

			// If valid and gives a longer subsequence, update dp[i]
			if valid && dp[i] < dp[j]+1 {
				dp[i] = dp[j] + 1
			}
		}
	}

	// Find the length of the longest valid subsequence
	maxLen := 0

	for _, v := range dp {
		if v > maxLen {
			maxLen = v
		}
	}
	
	// Return the minimum number of columns to delete
	return strLength - maxLen
}