/**
 * Problem: 3622. Check Divisibility by Digit Sum and Product
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkDivisibility(n int) bool {
	// Initialize sum of digits to 0
	digitSum := 0

	// Initialize product of digits to 1
	digitProduct := 1

	// Store original number for final modulo operation
	originalNumber := n

	// Extract each digit from the number
	for n > 0 {
		// Add current digit to sum
		digitSum += n % 10

		// Multiply current digit to product
		digitProduct *= n % 10

		// Remove last digit from number
		n = n / 10
	}

	// Return true if original number is divisible by (sum + product)
	return originalNumber%(digitSum+digitProduct) == 0
}
