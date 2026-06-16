/**
 * Problem: 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isPrefixOfWord(sentence string, searchWord string) int {
	// Split sentence into individual words
	words := strings.Split(sentence, " ")

	// Check each word to see if it starts with searchWord
	for i, word := range words {
		// If word has the prefix, return 1-indexed position
		if strings.HasPrefix(word, searchWord) {
			return i + 1
		}
	}

	// No word starts with searchWord
	return -1
}
