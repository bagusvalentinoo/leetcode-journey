/**
 * Problem: 693. Binary Number with Alternating Bits
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func hasAlternatingBits(n int) bool {
	// XOR n with n shifted right by 1 bit
	// This creates a number where bits are 1 where adjacent bits differ
	xorResult := n ^ (n >> 1)

	// If bits alternate, xorResult will be all 1's (e.g., 111...)
	// Check if xorResult + 1 is power of two (all 1's & all 1's+1 = 0)
	return (xorResult & (xorResult + 1)) == 0
}
