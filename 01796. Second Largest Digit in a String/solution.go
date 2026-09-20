/**
 * Problem: 1796. Second Largest Digit in a String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func secondHighest(s string) int {
	// Initialize largest and second largest digits as not found
	largest, secondLargest := -1, -1

	// Iterate through each character in the string
	for _, currentChar := range s {
		// Skip non-digit characters
		if currentChar < '0' || currentChar > '9' {
			continue
		}

		// Convert digit character to numeric value
		digit := int(currentChar - '0')

		// If digit is greater than largest
		if digit > largest {
			// Shift largest to second largest
			secondLargest = largest
			// Update largest with current digit
			largest = digit
		} else if digit < largest && digit > secondLargest {
			// If digit is distinct from largest and greater than second largest

			// Update second largest
			secondLargest = digit
		}
	}

	// Return second largest digit or -1 if it does not exist
	return secondLargest
}
