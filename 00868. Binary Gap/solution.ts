/**
 * Problem: 868. Binary Gap
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Longest distance between two adjacent 1's in n's binary representation
 *
 * @param n - The input positive integer
 *
 * @returns The longest distance between two adjacent 1's
 */
const binaryGap = (n: number): number => {
  // Convert number to binary string
  const binary: string = n.toString(2)

  // Track maximum gap between consecutive 1's
  let maxGap: number = 0
  // Track index of previous 1
  let prevIndex: number = -1

  // Iterate through each character in binary string
  for (let i: number = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      // Calculate gap if this is not the first 1
      if (prevIndex !== -1) maxGap = Math.max(maxGap, i - prevIndex)

      // Update previous index
      prevIndex = i
    }
  }

  // Return maximum gap
  return maxGap
}
