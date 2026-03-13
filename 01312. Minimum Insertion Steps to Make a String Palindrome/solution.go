/**
 * Problem: 1312. Minimum Insertion Steps to Make a String Palindrome
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minInsertions(s string) int {
	// Get string length
	n := len(s)

	// Handle edge cases
	if n <= 1 {
		return 0
	}

	// DP array where dp[j] stores minimum insertions for substring s[i..j] at current i
	dp := make([]int, n)

	// Iterate from second last character down to first
	for i := n - 2; i >= 0; i-- {
		// Store previous value before it gets overwritten
		prev := 0

		// Iterate from i+1 to end of string
		for j := i + 1; j < n; j++ {
			// Save current dp[j] before updating
			temp := dp[j]

			// If characters match, no extra insertion needed for these ends
			if s[i] == s[j] {
				dp[j] = prev
			} else {
				// Characters differ, need 1 insertion plus minimum of two possibilities:
				// - Insert at left to match right (dp[j])
				// - Insert at right to match left (dp[j-1])
				dp[j] = 1 + min(dp[j], dp[j-1])
			}

			// Update prev for next iteration
			prev = temp
		}
	}

	// Result is stored at last position
	return dp[n-1]
}
