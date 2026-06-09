/**
 * Problem: 1408. String Matching in an Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func stringMatching(words []string) []string {
	// Slice to store strings that are substrings of another word
	substringsFound := make([]string, 0)

	// Compare each word with every other word in the array
	for i := 0; i < len(words); i++ {
		for j := 0; j < len(words); j++ {
			// Skip comparing a word with itself
			if i != j && strings.Contains(words[j], words[i]) {
				// Current word is a substring of another word
				substringsFound = append(substringsFound, words[i])

				// No need to check further for this word
				break
			}
		}
	}

	// Return the slice of substrings found
	return substringsFound
}
