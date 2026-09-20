/**
 * Problem: 1763. Longest Nice Substring
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func longestNiceSubstring(s string) string {
	// Store string length to bound both loops
	strLen := len(s)

	// Early return for strings too short to be nice
	if strLen < 2 {
		return ""
	}

	// Track start index and length of best nice substring found
	bestStart, bestLen := 0, 0

	// Try every start position as left boundary of window
	for i := 0; i < strLen; i++ {
		// Reset bitmasks for lowercase and uppercase letters in current window
		lowerMask, upperMask := 0, 0

		// Expand right boundary and update character masks incrementally
		for j := i; j < strLen; j++ {
			// Read current character at right boundary
			c := s[j]

			// Set bit for lowercase letter in lower mask
			if c >= 'a' && c <= 'z' {
				lowerMask |= 1 << (c - 'a')
			} else {
				// Set bit for uppercase letter in upper mask
				upperMask |= 1 << (c - 'A')
			}

			// Window is nice when both masks match and beats previous best length
			if lowerMask == upperMask && (j-i+1) > bestLen {
				// Record start of new best window
				bestStart = i
				// Record length of new best window
				bestLen = j - i + 1
			}
		}
	}

	// Slice out best window, empty when no nice substring exists
	return s[bestStart : bestStart+bestLen]
}
