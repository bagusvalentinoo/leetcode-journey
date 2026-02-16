/**
 * Problem: 190. Reverse Bits
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func reverseBits(n int) int {
	// Convert integer to 32-bit binary string representation
	binaryStr := []byte(fmt.Sprintf("%032b", n))

	// Reverse the binary string using two-pointer approach
	for i := 0; i < len(binaryStr)/2; i++ {
		// Swap characters from both ends
		binaryStr[i], binaryStr[len(binaryStr)-1-i] = binaryStr[len(binaryStr)-1-i], binaryStr[i]
	}

	// Parse reversed binary string back to integer
	result, _ := strconv.ParseInt(string(binaryStr), 2, 32)

	// Return number with reversed bits
	return int(result)
}
