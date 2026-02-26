/**
 * Problem: 1404. Number of Steps to Reduce a Number in Binary Representation to One
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numSteps(s string) int {
	// Track total steps and carry from operations
	steps, carry := 0, 0

	// Process bits from right to left, excluding the first bit
	for i := len(s) - 1; i > 0; i-- {
		// Get current bit (0 or 1)
		bit := int(s[i] - '0')

		// Each position needs:
		// 1 step for the operation itself
		// Additional steps based on XOR of bit and carry
		steps += 1 + (bit ^ carry)

		// Update carry for next position
		carry |= bit
	}

	// Add final carry to total steps
	return steps + carry
}
