/**
 * Problem: 30. Substring with Concatenation of All Words
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findSubstring(s string, words []string) []int {
	// Result slice to store starting indices
	result := []int{}
	// Map to track frequency of each word
	wordCount := map[string]int{}
	// Map to assign unique numerical value to each word
	wordValue := map[string]int{}
	// Counter for assigning unique values
	uniqueCounter := 0
	
	// Build frequency and value maps
	for _, w := range words {
		if count, exists := wordCount[w]; exists {
			wordCount[w] = count+1
		} else {
			wordCount[w] = 1
			wordValue[w] = int(math.Pow(5,float64(uniqueCounter)))
			uniqueCounter++
		}
	}

	// Calculate target sum for valid concatenation
	targetSum := 0
	for word, value := range wordValue {
		targetSum += (value * wordCount[word])
	}

	// Length of each word in the list
	wordLen := len(words[0])

	// Try each possible starting position within first wordLen characters
	for offset := 0; offset < wordLen; offset++ {
		// Track current sum and word count in the sliding window
		currentSum, windowWordCount := 0, 0

		// Slide through string with wordLen steps
		for i := offset; i <= len(s)-wordLen; i+=wordLen {
			word := s[i:i+wordLen]

			// If current word is in our word list
			if value, exists := wordValue[word]; exists {
				currentSum += value
				windowWordCount++

				// If we've accumulated the right number of words
				if windowWordCount == len(words) {
					// Calculate starting position of the first word
					firstWordPos := i-((len(words)-1)*wordLen)

					// If sum matches, we found a valid concatenation
					if currentSum == targetSum {
						result = append(result, firstWordPos)
					}

					// Remove first word for sliding window
					windowWordCount--
					currentSum -= wordValue[s[firstWordPos:firstWordPos+wordLen]]
				}
			} else {
				// Reset on encountering word not in our list
				currentSum = 0
				windowWordCount = 0
			}
		}
	}
	
	return result
}