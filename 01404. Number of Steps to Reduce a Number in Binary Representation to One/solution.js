/**
 * Problem: 1404. Number of Steps to Reduce a Number in Binary Representation to One
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the number of steps to reduce a binary string to "0"
 *
 * @param {string} s - Binary string
 *
 * @returns {number} Number of steps
 */
const numSteps = (s) => {
  // Track total steps and carry from operations
  let steps = 0,
    carry = 0

  // Process bits from right to left, excluding the first bit
  for (let i = s.length - 1; i > 0; i--) {
    // Get current bit (0 or 1)
    const bit = s.charCodeAt(i) & 1

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
