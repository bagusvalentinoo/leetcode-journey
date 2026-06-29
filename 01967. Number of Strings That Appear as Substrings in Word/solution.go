/**
 * Problem: 1967. Number of Strings That Appear as Substrings in Word
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numOfStrings(patterns []string, word string) int {
	// Counter for patterns found in word
	matchCount := 0

	// Check each pattern against the word
	for _, currentPattern := range patterns {
		// If pattern is found in word, increment counter
		if strings.Contains(word, currentPattern) {
			matchCount++
		}
	}

	// Return the total number of patterns found in the word
	return matchCount
}
