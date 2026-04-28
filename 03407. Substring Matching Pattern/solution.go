/**
 * Problem: 3407. Substring Matching Pattern
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func hasMatch(s string, p string) bool {
	// Find the position of the wildcard '*' in the pattern
	wildcardIndex := strings.Index(p, "*")

	// Extract the prefix part before and after the wildcard
	prefixPattern, suffixPattern := p[:wildcardIndex], p[wildcardIndex+1:]

	// Find the first occurrence of prefix in the string
	prefixMatchIndex := strings.Index(s, prefixPattern)

	// If prefix not found, pattern cannot match
	if prefixMatchIndex == -1 {
		return false
	}

	// Get the remaining string after the matched prefix
	remainingString := s[prefixMatchIndex+len(prefixPattern):]

	// Check if suffix exists in the remaining string
	suffixMatchIndex := strings.Index(remainingString, suffixPattern)

	// Return true if suffix is found, false otherwise
	return suffixMatchIndex != -1
}
