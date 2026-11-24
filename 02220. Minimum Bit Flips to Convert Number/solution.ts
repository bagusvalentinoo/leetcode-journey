/**
 * Problem: 2220. Minimum Bit Flips to Convert Number
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count differing bits between two numbers
 *
 * @param start - Initial number
 * @param goal - Target number
 *
 * @returns Minimum number of bit flips
 */
const minBitFlips = (start: number, goal: number): number => {
  // XOR marks each bit that differs between the two numbers
  let differingBits: number = start ^ goal
  // Count the number of differing bits
  let flips: number = 0

  // Remove one set bit until no differing bits remain
  while (differingBits) {
    // Clear the lowest set bit
    differingBits &= differingBits - 1
    // Record the required flip
    flips++
  }

  // Return the number of required flips
  return flips
}
