/**
 * Problem: 3456. Find Special Substring of Length K
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func hasSpecialSubstring(s string, k int) bool {
	// Initialize with first character
	currentChar := s[0]

	// Count of consecutive occurrences of current character
	currentCount := 1

	// Iterate through the string starting from second character
	for i := 1; i < len(s); i++ {
		// If current character matches previous, increment count
		if s[i] == currentChar {
			currentCount++
		} else {
			// If character changes

			// Check if previous run had exactly k characters
			if currentCount == k {
				return true
			}

			// Start new run with new character
			currentChar = s[i]
			currentCount = 1
		}
	}

	// Check the last run after loop ends
	if currentCount == k {
		return true
	}

	// No run of length k found
	return false
}
