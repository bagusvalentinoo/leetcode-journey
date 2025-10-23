/**
 * Problem: 3461. Check If Digits Are Equal in String After Operations I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func hasSameDigits(s string) bool {
	// Convert the input string `s` into a slice of bytes for easier manipulation
	b := []byte(s)

	// Store the length of the byte slice for iteration purposes
	length := len(b)

	// Loop until the length of the byte slice is reduced to 2
	for length > 2 {
		// Iterate through the byte slice, reducing adjacent digits
		for i := 0; i < length-1; i++ {
			// Calculate the sum of two adjacent digits, take modulo 10,
			// and convert back to a byte representation
			b[i] = ((b[i]-'0') + (b[i+1]-'0'))%10 + '0'
		}

		// Decrease the length to reflect the reduced size of the slice
		length--
	}

	// Return true if the first two digits in the reduced slice are equal
	return b[0] == b[1]
}
