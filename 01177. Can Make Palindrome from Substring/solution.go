/**
 * Problem: 1177. Can Make Palindrome from Substring
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func canMakePaliQueries(s string, queries [][]int) []bool {
	// charOddEvenState keeps track of the parity (odd/even) of character counts up to each index.
	charOddEvenState := make([]uint32, 0, len(s)+1)

	// bitValue represents the current parity state of all characters.
	var bitValue uint32 = 0
	// Initialize with the starting state (no characters seen yet).
	charOddEvenState = append(charOddEvenState, bitValue)

	// toggleBit flips the bit at position 'pos' in bitValue, updating the parity for that character.
	toggleBit := func(pos int) {
		bit := uint32(1 << pos)

		// If the bit is set, unset it (even count); otherwise, set it (odd count).
		if bitValue&bit != 0 {
			bitValue &= ^bit
		} else {
			bitValue |= bit
		}

		// Append the updated bitValue to charOddEvenState.
		charOddEvenState = append(charOddEvenState, bitValue)
	}

	// Iterate over the string, updating the parity state for each character.
	for i := 0; i < len(s); i++ {
		pos := int(s[i] - 'a') // Map character to position 0-25.
		toggleBit(pos)
	}

	// Prepare the result slice to store answers for each query.
	res := make([]bool, len(queries))

	// Process each query.
	for i := 0; i < len(queries); i++ {
		left := queries[i][0]   // Start index of substring.
		right := queries[i][1]  // End index of substring.
		k := queries[i][2]      // Maximum number of replacements allowed.

		// XOR the parity states to get the parity for the substring.
		bitChanges := charOddEvenState[left] ^ charOddEvenState[right+1]
		// Count the number of bits set (characters with odd counts), divide by 2 for pairs.
		countBitChanges := bits.OnesCount32(bitChanges) / 2
		// If the number of required replacements is within k, mark as true.
		res[i] = (countBitChanges-k <= 0)
	}

	// Return the result for all queries.
	return res
}
