/**
 * Problem: 1935. Maximum Number of Words You Can Type
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func canBeTypedWords(text string, brokenLetters string) int {
	// Split the input text into individual words using space as the delimiter
	words := strings.Split(text, " ")
	// Initialize a counter to keep track of the number of words that can be typed
	count := 0

	// Iterate over each word in the words slice
	for _, word := range words {
		// Assume the word can be typed unless a broken letter is found
		canType := true

		// Check each broken letter to see if it exists in the current word
		for _, brokenChar := range brokenLetters {
			// If the word contains a broken letter, mark it as untypable and exit the loop
			if strings.ContainsRune(word, brokenChar) {
				canType = false
				break
			}
		}

		// If the word does not contain any broken letters, increment the counter
		if canType {
			count++
		}
	}

	// Return the total count of words that can be typed
	return count
}
