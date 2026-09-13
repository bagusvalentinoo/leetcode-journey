/**
 * Problem: 1662. Check If Two String Arrays are Equivalent
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func arrayStringsAreEqual(word1 []string, word2 []string) bool {
	// Concatenate all parts of the first array into a single string
	first := ""

	// Append each part in order
	for _, part := range word1 {
		first += part
	}

	// Concatenate all parts of the second array into a single string
	second := ""

	// Append each part in order
	for _, part := range word2 {
		second += part
	}

	// Compare the concatenated strings for equality
	return first == second
}
