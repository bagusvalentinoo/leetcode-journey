/**
 * Problem: 3370. Smallest Number With All Set Bits
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the smallest number with the same number of bits set to 1 as n
 *
 * @param {number} n - Input number
 *
 * @returns {number} - Smallest number with all bits set
 */
const smallestNumber = (n) => {
  // Calculate the position of the most significant bit (MSB) in the number
  // Math.clz32 returns the count of leading zeros in a 32-bit integer
  const msb = 31 - Math.clz32(n)

  // Generate a number where all bits up to the MSB are set to 1
  // This is achieved by left-shifting 1 by (msb + 1) positions and subtracting 1
  const result = (1 << (msb + 1)) - 1

  // Return the resulting number with all bits set up to the MSB
  return result
}
