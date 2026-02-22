/**
 * Problem: 868. Binary Gap
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Longest distance between two adjacent 1's in n's binary representation
 *
 * @param {number} n - The input positive integer
 *
 * @returns {number} The longest distance between two adjacent 1's
 */
const binaryGap = (n) => {
  // Convert number to binary string
  const binary = n.toString(2)

  // Track maximum gap between consecutive 1's
  let maxGap = 0
  // Track index of previous 1
  let prevIndex = -1

  // Iterate through each character in binary string
  for (let i = 0; i < binary.length; i++) {
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
