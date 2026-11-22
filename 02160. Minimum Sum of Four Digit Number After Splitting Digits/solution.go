/**
 * Problem: 2160. Minimum Sum of Four Digit Number After Splitting Digits
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumSum(num int) int {
	// Extract each digit from the input number
	digits := []int{num / 1000, num / 100 % 10, num / 10 % 10, num % 10}

	// Sort the four digits in ascending order
	for i := 0; i < len(digits); i++ {
		for j := i + 1; j < len(digits); j++ {
			if digits[i] > digits[j] {
				digits[i], digits[j] = digits[j], digits[i]
			}
		}
	}

	// Return the sum of the two formed numbers
	return (digits[0]+digits[1])*10 + digits[2] + digits[3]
}
