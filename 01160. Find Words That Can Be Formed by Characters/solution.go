/**
 * Problem: 1160. Find Words That Can Be Formed by Characters
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countCharacters(words []string, chars string) int {
	// Initialize a slice to store the frequency of each character in 'chars'
	charFrequency := make([]int, 26)

	// Count the frequency of each character in 'chars'
	for i := 0; i < len(chars); i++ {
		charFrequency[int(chars[i]-'a')]++
	}

	// Variable to keep the total length of valid words
	totalLength := 0

	// Iterate through each word in the 'words' slice
	for _, word := range words {
		// Create a copy of the character frequency for the current word
		currentFrequency := make([]int, 26)
		copy(currentFrequency, charFrequency)

		// Flag to check if the word can be formed by 'chars'
		isFormable := true

		// Check each character in the current word
		for i := 0; i < len(word); i++ {
			// Decrement the frequency for the current character
			currentFrequency[int(word[i]-'a')]--

			// If frequency goes below zero, the word cannot be formed
			if currentFrequency[int(word[i]-'a')] < 0 {
				isFormable = false
				break
			}
		}

		// If the word is formable, add its length to the total
		if isFormable {
			totalLength += len(word)
		}
	}

	// Return the total length of all valid words
	return totalLength
}
