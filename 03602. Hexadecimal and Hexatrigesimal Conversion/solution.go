/**
 * Problem: 3602. Hexadecimal and Hexatrigesimal Conversion
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func concatHex36(n int) string {
	// Maximum possible length for concatenated result (square hex + cube base36)
	bufferLength := 12

	// Byte slice to build result from right to left
	resultBuffer := make([]byte, bufferLength)

	// Process cube value and convert to base36 (right to left)
	for cube := n * n * n; cube > 0; cube /= 36 {
		bufferLength--
		resultBuffer[bufferLength] = getCharFromDigit(cube % 36)
	}

	// Process square value and convert to hexadecimal (right to left)
	for square := n * n; square > 0; square /= 16 {
		bufferLength--
		resultBuffer[bufferLength] = getCharFromDigit(square % 16)
	}

	// Return string from the first filled position to the end
	return string(resultBuffer[bufferLength:])
}

// Convert numeric digit to character: 0-9 -> '0'-'9', 10-35 -> 'A'-'Z'
func getCharFromDigit(digit int) byte {
	// If digit is 0-9, convert to '0'-'9'
	if digit <= 9 {
		return byte('0' + digit)
	}

	// If digit is 10-35, convert to 'A'-'Z'
	return byte('A' + (digit - 10))
}
