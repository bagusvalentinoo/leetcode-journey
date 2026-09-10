/**
 * Problem: 476. Number Complement
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findComplement(num int) int {
	// Mask with all bits set over num's bit length
	mask := 0

	// Copy of num used to count significant bit positions
	remaining := num

	// Build mask of all ones matching num's bit length
	for remaining > 0 {
		// Shift mask left and set its lowest bit
		mask = (mask << 1) | 1
		// Drop the lowest bit of the copy
		remaining >>= 1
	}

	// XOR with mask flips exactly the significant bits
	return num ^ mask
}
