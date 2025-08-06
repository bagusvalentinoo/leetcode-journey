/**
 * Problem: 44. Wildcard Matching
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isMatch(s string, p string) bool {
	// Get the lengths of the input string and pattern
	sLen, pLen := len(s), len(p)
	// Initialize indices for string and pattern, and variables to track last '*' position and corresponding string index
	sIdx, pIdx, starIdx, sTmpIdx := 0, 0, -1, -1

	// Iterate through the input string
	for sIdx < sLen {
		// If current pattern character matches current string character or is '?', move both pointers forward
		if pIdx < pLen && (p[pIdx] == '?' || p[pIdx] == s[sIdx]) {
			sIdx++
			pIdx++
		// If current pattern character is '*', record the position of '*' and the current string index, then move pattern pointer forward
		} else if pIdx < pLen && p[pIdx] == '*' {
			starIdx = pIdx
			sTmpIdx = sIdx
			pIdx++
		// If there was no previous '*', and current characters do not match, return false
		} else if starIdx == -1 {
			return false
		// If there was a previous '*', backtrack: move pattern pointer to the character after '*', and string pointer to the next character after last match
		} else {
			pIdx = starIdx + 1
			sIdx = sTmpIdx + 1
			sTmpIdx = sIdx
		}
	}
	
	// Check if the remaining characters in the pattern are all '*'
	for i := pIdx; i < pLen; i++ {
		if p[i] != '*' {
			return false
		}
	}

	// If all checks passed, the string matches the pattern
	return true
}
