/**
 * Problem: 1092. Shortest Common Supersequence
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 8 ms (Beats 100%)
 */

func shortestCommonSupersequence(s string, t string) string {
	// Get lengths of input strings s and t
	m, n := len(s), len(t)

	// Initialize 2D slice for dynamic programming table to store LCS lengths
	dp := make([][]int, m+1)
	for i := 0; i <= m; i++ {
		dp[i] = make([]int, n+1)
	}

	// Fill dp table: dp[i][j] holds length of LCS of s[:i] and t[:j]
	for i := 1; i <= m; i++ {
		for j := 1; j <= n; j++ {
			if s[i-1] == t[j-1] {
				// Characters match, increment LCS length
				dp[i][j] = 1 + dp[i-1][j-1]
			} else {
				// Characters don't match, take max LCS length from previous subproblems
				dp[i][j] = max(dp[i-1][j], dp[i][j-1])
			}
		}
	}

	// Prepare to build the shortest common supersequence
	var result []byte

	// Start from the end of both strings
	i, j := m, n

	// Trace back through dp table to build the supersequence
	for i > 0 && j > 0 {
		if s[i-1] == t[j-1] {
			// If characters match, add to result and move diagonally
			result = append(result, s[i-1])
			i--
			j--
		} else if dp[i-1][j] > dp[i][j-1] {
			// If previous row has longer LCS, add s[i-1] and move up
			result = append(result, s[i-1])
			i--
		} else {
			// Otherwise, add t[j-1] and move left
			result = append(result, t[j-1])
			j--
		}
	}

	// Add remaining characters from s, if any
	for i > 0 {
		result = append(result, s[i-1])
		i--
	}

	// Add remaining characters from t, if any
	for j > 0 {
		result = append(result, t[j-1])
		j--
	}

	// Reverse the result to get the correct order
	answer := make([]byte, len(result))
	idx := 0
	for i := len(result) - 1; i >= 0; i-- {
		answer[idx] = result[i]
		idx++
	}

	// Convert byte slice to string and return
	return string(answer)
}
