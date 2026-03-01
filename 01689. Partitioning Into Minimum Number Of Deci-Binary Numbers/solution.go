/**
 * Problem: 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minPartitions(n string) int {
	// Initialize maximum digit to 0
	maxDigit := 0

	// Iterate through each character in the string
	for _, char := range n {
		// Convert ASCII digit to integer
		digit := int(char - '0')

		// Update maxDigit if current digit is larger
		if digit > maxDigit {
			maxDigit = digit
		}
	}

	return maxDigit
}
