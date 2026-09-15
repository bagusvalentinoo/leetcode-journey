/**
 * Problem: 191. Number of 1 Bits
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts the number of set bits (Hamming weight) in an integer
 *
 * @param n - Input positive integer
 *
 * @returns Number of 1 bits in binary representation
 */
const hammingWeight = (n: number): number => {
  // Counter for set bits found
  let setBitCount: number = 0

  // Clear the lowest set bit each iteration until no bits remain
  while (n !== 0) {
    // Drop the lowest set bit from n
    n &= n - 1

    // Count the removed bit
    setBitCount++
  }

  // Return the total number of set bits
  return setBitCount
}
