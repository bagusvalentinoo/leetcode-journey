/**
 * Problem: 1163. Last Substring in Lexicographical Order
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func lastSubstring(s string) string {
	// Initialize the index of the current maximum substring to the last character
	lastMaxIdx := len(s) - 1

	// Iterate backwards through the string to find the lexicographically last substring
	for currIdx := len(s) - 1; currIdx >= 0; currIdx-- {
		// If the current character is greater than the character at lastMaxIdx, update lastMaxIdx
		if s[currIdx] > s[lastMaxIdx] {
			lastMaxIdx = currIdx
		// If the current character equals the character at lastMaxIdx, compare substrings
		} else if s[currIdx] == s[lastMaxIdx] {
			// Initialize pointers to compare the substrings starting at currIdx and lastMaxIdx
			i, j := currIdx+1, lastMaxIdx+1

			// Compare characters of both substrings until a difference is found or one ends
			for i < lastMaxIdx && j < len(s) && s[i] == s[j] {
				i++
				j++
			}

			// If substring starting at currIdx is greater, update lastMaxIdx
			if i == lastMaxIdx || j == len(s) || s[i] > s[j] {
				lastMaxIdx = currIdx
			}
		}
	}

	// Return the substring starting from the lexicographically last index
	return s[lastMaxIdx:]
}
