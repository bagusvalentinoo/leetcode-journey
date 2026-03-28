/**
 * Problem: 2573. Find the String with LCP
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findTheString(lcp [][]int) string {
	// Get the length of the string
	n := len(lcp)

	// Initialize slice to store characters of the reconstructed string
	word := make([]byte, n)

	// Start with character 'a'
	currentChar := byte('a')

	// First pass: assign characters to positions based on LCP values
	for i := 0; i < n; i++ {
		// If current position hasn't been assigned a character yet
		if word[i] == 0 {
			// If we've exhausted all lowercase letters (a-z), the LCP matrix is invalid
			if currentChar > 'z' {
				return ""
			}

			// Assign current character to this position
			word[i] = currentChar

			// All positions j > i that have LCP[i][j] > 0 must have the same character as position i
			for j := i + 1; j < n; j++ {
				if lcp[i][j] > 0 {
					word[j] = word[i]
				}
			}

			// Move to next character for the next group
			currentChar++
		}
	}

	// Second pass: verify that the constructed string matches the LCP matrix
	for i := n - 1; i >= 0; i-- {
		for j := n - 1; j >= 0; j-- {
			// If characters at positions i and j are different
			if word[i] != word[j] {
				// LCP should be 0 for different characters
				if lcp[i][j] != 0 {
					return ""
				}
			} else {
				// If characters are the same
				// For positions at the end of the string (i or j is last index)
				if i == n-1 || j == n-1 {
					// LCP should be 1 for same character at the end
					if lcp[i][j] != 1 {
						return ""
					}
				} else {
					// For other positions, LCP should be 1 + LCP of next positions
					if lcp[i][j] != lcp[i+1][j+1]+1 {
						return ""
					}
				}
			}
		}
	}

	// Return the reconstructed string
	return string(word)
}
