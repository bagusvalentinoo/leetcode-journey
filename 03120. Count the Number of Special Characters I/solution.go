/**
 * Problem: 3120. Count the Number of Special Characters I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numberOfSpecialChars(word string) int {
	// Number of letters in the alphabet
	const ALPHABET_SIZE = 26

	// Code point for lowercase 'a' and uppercase 'A'
	lowerA, upperA := int('a'), int('A')

	// Bitmasks to track which lowercase and uppercase letters appear
	lowerMask, upperMask := 0, upperMask

	// Iterate through each character in the input string
	for _, currentChar := range word {
		// Get character code
		charCode := int(currentChar)

		// If character is lowercase a-z, set its corresponding bit in lowerMask
		if charCode >= lowerA && charCode < lowerA+ALPHABET_SIZE {
			lowerMask |= 1 << (charCode - lowerA)
		}
		// If character is uppercase A-Z, set its corresponding bit in upperMask
		if charCode >= upperA && charCode < upperA+ALPHABET_SIZE {
			upperMask |= 1 << (charCode - upperA)
		}
	}

	// Bitwise AND gives common letters that appear in both cases
	commonMask := lowerMask & upperMask

	// Counter for number of set bits (common letters)
	commonCount := 0

	// Count set bits using Brian Kernighan's algorithm
	for commonMask > 0 {
		// Clear the lowest set bit
		commonMask &= commonMask - 1
		// Increment counter
		commonCount++
	}

	// Return the count of characters appearing in both cases
	return commonCount
}
