/**
 * Problem: 1278. Palindrome Partitioning III
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

func palindromePartition(s string, k int) int {
	// Get the length of the input string
	n := len(s)

	// Initialize a 2D slice to store the cost of converting substrings into palindromes
	cost := make([][]int, n)
	for i := range cost {
		cost[i] = make([]int, n)
	}

	// Calculate the cost of converting each substring into a palindrome
	for length := 2; length <= n; length++ {
		for i := 0; i <= n-length; i++ {
			j := i + length - 1

			// Initialize the cost for the current substring
			costVal := 0

			// Add the cost of the inner substring if the length is greater than 2
			if length > 2 {
				costVal = cost[i+1][j-1]
			}

			// Increment the cost if the characters at the ends are different
			if s[i] != s[j] {
				costVal++
			}

			// Store the calculated cost for the current substring
			cost[i][j] = costVal
		}
	}

	// Initialize a 2D slice for dynamic programming to store minimum costs
	dp := make([][]int, k+1)
	for i := range dp {
		dp[i] = make([]int, n+1)

		// Set all values to a large number (101) to represent infinity
		for j := range dp[i] {
			dp[i][j] = 101
		}
	}

	// Base case: no partitions and no characters result in zero cost
	dp[0][0] = 0

	// Fill the DP table for each partition count and substring length
	for i := 1; i <= k; i++ {
		for j := i; j <= n; j++ {
			// Iterate over possible previous partition points
			for p := i - 1; p < j; p++ {
				// Skip if the previous state is not valid
				if dp[i-1][p] != 101 {
					// Calculate the new cost for the current partition
					newCost := dp[i-1][p] + cost[p][j-1]

					// Update the DP table with the minimum cost
					if newCost < dp[i][j] {
						dp[i][j] = newCost
					}
				}
			}
		}
	}

	// Return the minimum cost to partition the string into k palindromes
	return dp[k][n]
}
