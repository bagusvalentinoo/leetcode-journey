/**
 * Problem: 3498. Reverse Degree of a String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func reverseDegree(s string) int {
	// Initialize sum accumulator to store the total reverse degree
	totalSum := 0

	// Iterate through each character in the input string
	for index := 0; index < len(s); index++ {
		// Calculate reverse alphabet position (a=26, b=25, ..., z=1)
		reversePosition := 123 - int(s[index])

		// Add to total: reversePosition multiplied by 1-indexed position
		totalSum += reversePosition * (index + 1)
	}

	// Return the calculated reverse degree sum
	return totalSum
}
