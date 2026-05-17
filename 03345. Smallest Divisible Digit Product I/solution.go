/**
 * Problem: 3345. Smallest Divisible Digit Product I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func smallestNumber(n int, t int) int {
	// If t is 0 or 1, any number's digit product is divisible by t
	if t == 0 || t == 1 {
		return n
	}

	// Iterate through numbers starting from n
	for i := n; ; i++ {
		// Create a copy of current number to process digits
		currentNumber := i
		// Initialize product of digits to 1 (multiplicative identity)
		digitProduct := 1

		// Extract and multiply each digit
		for currentNumber > 0 {
			// Get the last digit
			lastDigit := currentNumber % 10

			// Multiply digit to product
			digitProduct *= lastDigit
			// Remove the last digit
			currentNumber = currentNumber / 10
		}

		// If product is divisible by t, return current number
		if digitProduct%t == 0 {
			return i
		}
	}
}
