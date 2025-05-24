/**
 * Problem: 2942. Find Words Containing Character
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findWordsContaining(words []string, x byte) []int {
	// Initialize a slice to store indices of words containing the character
	indices := make([]int, 0, len(words))

	// Iterate through each word with its index
	for i, word := range words {
		// Check if the word contains the character 'x'
		if strings.IndexByte(word, x) >= 0 {
			// Add the index to our result slice
			indices = append(indices, i)
		}
	}

	// Return the collected indices
	return indices
}