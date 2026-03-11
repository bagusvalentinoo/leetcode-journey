/**
 * Problem: 1009. Complement of Base 10 Integer
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns complement by flipping all bits
 *
 * @param {number} n - Input integer
 *
 * @returns {number} Complement of n
 */
const bitwiseComplement = (n) => {
  // Handle edge case: complement of 0 is 1
  if (n === 0) return 1

  // Initialize bitm`ask to cover all bits in n
  let bitmask = 1

  // Shift bitmask left until it's larger than n
  while (bitmask <= n) bitmask <<= 1

  // XOR with (bitmask-1) to flip all bits in the range
  return (bitmask - 1) ^ n
}
