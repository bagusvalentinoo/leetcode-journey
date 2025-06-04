/**
 * Problem: 1009. Complement of Base 10 Integer
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func bitwiseComplement(n int) int {
	// Handle edge case: complement of 0 is 1
	if n == 0 {
		return 1
	}

	// Initialize bitmask to cover all bits in n
	bitmask := 1

	// Shift bitmask left until it's larger than n
	for bitmask <= n {
		bitmask <<= 1
	}

	// XOR with (bitmask-1) to flip all bits in the range
	return (bitmask - 1) ^ n
}