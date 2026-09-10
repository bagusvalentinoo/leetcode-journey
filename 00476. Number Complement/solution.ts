/**
 * Problem: 476. Number Complement
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Flip all bits of num's binary representation
 *
 * @param num - Positive integer to complement
 *
 * @returns Complement of num
 */
const findComplement = (num: number): number => {
  // Mask with all bits set over num's bit length
  let mask: number = 0

  // Copy of num used to count significant bit positions
  let remaining: number = num

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
