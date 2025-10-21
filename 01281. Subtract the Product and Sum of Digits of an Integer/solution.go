/**
 * Problem: 1281. Subtract the Product and Sum of Digits of an Integer
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func subtractProductAndSum(n int) int {
	// Initialize variables for product (multi) and sum (sum) of digits
	multi, sum := 1, 0

	// Loop through each digit of the number until n becomes 0
	for ; n != 0; n = n / 10 {
		// Multiply the current digit with the product
		multi *= n % 10
		// Add the current digit to the sum
		sum += n % 10
	}

	// Return the difference between the product and the sum of digits
	return multi - sum
}
