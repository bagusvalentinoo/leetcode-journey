/**
 * Problem: 3838. Weighted Word Mapping
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func mapWordWeights(words []string, weights []int) string {
	// Initialize empty result string
	resultString := ""

	// Iterate through each word in the input array
	for wordIndex := 0; wordIndex < len(words); wordIndex++ {
		// Get current word
		currentWord := words[wordIndex]

		// Initialize sum of weights for current word
		totalWeight := 0

		// Calculate sum of weights for all characters in current word
		for charIndex := 0; charIndex < len(currentWord); charIndex++ {
			// Convert character to index (0 for 'a', 25 for 'z')
			charIndexValue := int(currentWord[charIndex] - 'a')

			// Add corresponding weight to total
			totalWeight += weights[charIndexValue]
		}

		// Get character from end of alphabet (122 = 'z')
		// Position determined by totalWeight modulo 26
		encodedChar := byte(122 - (totalWeight % 26))

		// Append encoded character to result string
		resultString += string(encodedChar)
	}

	// Return the encoded result string
	return resultString
}
