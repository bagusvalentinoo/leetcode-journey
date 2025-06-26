/**
 * Problem: 1023. Camelcase Matching
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func camelMatch(queries []string, pattern string) []bool {
	// Initialize result slice to store matching results for each query
	result := make([]bool, len(queries))

	for queryIndex, query := range queries {
		// Track positions in pattern and current query word
		patternIndex, queryPos := 0, 0
		
		for ; queryPos < len(query); queryPos++ {
			if patternIndex < len(pattern) && query[queryPos] == pattern[patternIndex] {
				patternIndex++
			} else if unicode.IsUpper(rune(query[queryPos])) {
				break
			}
		}

		// Check if we matched the entire word and pattern
		if queryPos == len(query) && patternIndex == len(pattern) {
			result[queryIndex] = true
		}
	}

	return result
}
