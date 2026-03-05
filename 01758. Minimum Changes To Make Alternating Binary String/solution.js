/**
 * Problem: 1758. Minimum Changes To Make Alternating Binary String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum operations to make binary string alternating
 *
 * @param {string} s - Binary string containing only '0' and '1'
 *
 * @returns {number} Minimum operations needed
 */
const minOperations = (s) => {
  // Count differences from starting with '0' at even positions
  let differences = 0
  // Get string length
  const { length } = s

  // Check each character position
  for (let i = 0; i < length; i++)
    // XOR compares: s[i] with expected value (0 for even i, 1 for odd i)
    // If s[i] = '0' (ASCII 48) and i is even (0), XOR gives 0 -> no diff
    // If s[i] = '1' (ASCII 49) and i is even (0), XOR gives 1 -> diff
    if (s[i] ^ (i & 1)) differences++

  // Minimum between starting with '0' at even vs '1' at even
  return Math.min(differences, length - differences)
}
