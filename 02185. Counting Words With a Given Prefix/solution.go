/**
 * Problem: 2185. Counting Words With a Given Prefix
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func prefixCount(words []string, pref string) int {
	// Count words that start with the required prefix
	count := 0

	// Check every word for the prefix
	for _, word := range words {
		// Increment the count when the word starts with the prefix
		if len(word) >= len(pref) && word[:len(pref)] == pref {
			count++
		}
	}

	// Return the number of matching words
	return count
}
