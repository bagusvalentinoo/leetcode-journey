/**
 * Problem: 3330. Find the Original Typed String I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func possibleStringCount(word string) int {
	// Get the length of the input word and initialize the count to 1
	wordLength, count := len(word), 1
	
	// Iterate through the word to count consecutive duplicate characters
	for i := 1; i < wordLength; i++ {
		// If current character matches the previous one, increment count
		if word[i-1] == word[i] {
			count++
		}
	}

	// Return the total count of possible original strings
	return count
}
