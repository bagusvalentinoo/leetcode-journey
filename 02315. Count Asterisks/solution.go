/**
 * Problem: 2315. Count Asterisks
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countAsterisks(s string) int {
	// Track whether the current character is inside a pair of vertical bars
	isInsideBars := false
	// Store the number of asterisks outside bar pairs
	count := 0

	// Process each character in the string
	for _, character := range s {
		// Toggle the bar-pair state when reaching a vertical bar
		if character == '|' {
			isInsideBars = !isInsideBars
		}

		// Count asterisks only when they are outside a bar pair
		if character == '*' && !isInsideBars {
			count++
		}
	}

	// Return the number of valid asterisks
	return count
}
