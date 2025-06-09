/**
 * Problem: 1017. Convert to Base -2
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func baseNeg2(n int) string {
	// Base case: if n is 0, return "0"
	if n == 0 {
		return "0"
	}

	// Create a slice to store the digits
	var digits []byte

	// Convert n to base -2
	for n != 0 {
		// Calculate remainder when divided by -2
		remainder := n % -2
		n /= -2

		// Handle negative remainder by making it positive
		if remainder < 0 {
			remainder += 2
			n++
		}
		
		// Prepend the digit to the result
		digits = append([]byte{byte(remainder + '0')}, digits...)
	}
	
	// Convert the byte slice to string and return
	return string(digits)
}
