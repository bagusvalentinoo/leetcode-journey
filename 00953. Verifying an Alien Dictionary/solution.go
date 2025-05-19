/**
 * Problem: 953. Verifying an Alien Dictionary
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isAlienSorted(words []string, order string) bool {
	// Create a map to store the order/rank of each letter in the alien dictionary
	charRank := make([]int, 26)

	// Store each character's position in the order string
	for i, c := range order {
		charRank[c-'a'] = i
	}

	// Check up to 20 character positions (assuming no word exceeds this length)
	for pos := 0; pos < 20; pos++ {
		prevRank, allWordsSame := -1, true

		// Check each word at the current position
		for _, word := range words {
			currRank := -1

			// Get rank of current character if word is long enough
			if pos < len(word) {
				currRank = charRank[word[pos]-'a']
			}

			// If current rank is less than previous, words are out of order
			if prevRank > currRank {
				return false
			}

			// Track if all words have same character at this position
			if prevRank == currRank {
				allWordsSame = false
			}

			prevRank = currRank
		}

		// If words differ at this position, no need to check further positions
		if allWordsSame {
			break
		}
	}
	
	return true
}