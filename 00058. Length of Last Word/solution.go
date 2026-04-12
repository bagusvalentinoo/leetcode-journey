/**
 * Problem: 58. Length of Last Word
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func lengthOfLastWord(s string) int {
	// Initialize counter for word length
	length := 0

	// Start from the end of the string
	i := len(s) - 1

	// Skip trailing spaces
	for i >= 0 && s[i] == ' ' {
		i--
	}

	// Count characters of the last word
	for i >= 0 && s[i] != ' ' {
		// Increment length counter
		length++
		// Decrement index
		i--
	}

	return length
}
