/**
 * Problem: 1446. Consecutive Characters
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxPower(s string) int {
	// Convert string to byte slice (UTF-8 safe for ASCII)
	characters := []byte(s)

	// Initialize maximum power to at least 1 (single character)
	maxConsecutive := 1

	// Iterate through each character in the slice
	for i := 0; i < len(characters); i++ {
		// Counter for current consecutive sequence length
		currentStreak := 1

		// Count consecutive identical characters starting at position i
		for i < len(characters)-1 && characters[i] == characters[i+1] {
			// Increment streak counter
			currentStreak++
			// Move to next character
			i++
		}

		// Update maximum if current streak is larger
		if currentStreak > maxConsecutive {
			maxConsecutive = currentStreak
		}
	}

	// Return the maximum consecutive length found
	return maxConsecutive
}
