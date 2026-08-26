/**
 * Problem: 2904. Shortest and Lexicographically Smallest Beautiful String
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func shortestBeautifulSubstring(s string, k int) string {
	// Try all substring lengths from k up to full string length
	for length := k; length <= len(s); length++ {
		// Track the best (shortest and lexicographically smallest) substring
		ans := ""

		// Slide a window of fixed length across the string
		for i := length; i <= len(s); i++ {
			// Extract current substring of the fixed length
			curr := s[i-length : i]

			// Update answer if current is lexicographically smaller and has exactly k ones
			if (ans == "" || curr < ans) && strings.Count(curr, "1") == k {
				ans = curr
			}
		}

		// Found a valid beautiful substring at this length: return it immediately
		if ans != "" {
			return ans
		}
	}

	// No beautiful substring found
	return ""
}
