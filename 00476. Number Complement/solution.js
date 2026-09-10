/**
 * Problem: 476. Number Complement
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Flip all bits of num's binary representation
 *
 * @param {number} num - Positive integer to complement
 *
 * @returns {number} Complement of num
 */
const findComplement = (num) => {
  // Mask with all bits set over num's bit length
  let mask = 0

  // Copy of num used to count significant bit positions
  let remaining = num

  // Build mask of all ones matching num's bit length
  while (remaining > 0) {
    // Shift mask left and set its lowest bit
    mask = (mask << 1) | 1
    // Drop the lowest bit of the copy
    remaining >>= 1
  }

  // XOR with mask flips exactly the significant bits
  return num ^ mask
}
