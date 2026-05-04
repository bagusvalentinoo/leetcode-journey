/**
 * Problem: 3536. Maximum Product of Two Digits
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxProduct(n int) int {
	// Initialize two largest digit trackers
	largestDigit, secondLargestDigit := 0, 0

	// Process each digit of the number
	for n > 0 {
		// Extract the last digit
		currentDigit := n % 10

		// Update largest and second largest digits
		if currentDigit > largestDigit {
			secondLargestDigit = largestDigit
			largestDigit = currentDigit
		} else if currentDigit > secondLargestDigit {
			// Update only second largest if current digit is between them
			secondLargestDigit = currentDigit
		}

		// Remove the last digit
		n = n / 10
	}

	// Return product of the two largest digits
	return largestDigit * secondLargestDigit
}
