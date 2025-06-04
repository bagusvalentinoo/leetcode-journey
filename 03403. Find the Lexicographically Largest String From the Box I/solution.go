/**
 * Problem: 3403. Find the Lexicographically Largest String From the Box I
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func answerString(word string, numFriends int) string {
	// Return the word directly if there's only one friend
	if numFriends == 1 {
		return word
	}

	// Get the length of the word
	wordLength := len(word)
	// Initialize result string
	result := ""

	// Find the lexicographically largest substring
	for i := 0; i < wordLength; i++ {
		// Compare current result with substring starting at position i
		result = max(result, word[i:min(i+wordLength-numFriends+1, wordLength)])
	}
	
	return result
}