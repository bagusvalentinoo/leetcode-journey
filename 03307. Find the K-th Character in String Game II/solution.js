/**
 * Problem: 3307. Find the K-th Character in String Game II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the k-th character in a sequence generated by a series of operations
 *
 * @param {number} k - The 1-indexed position of the character to find
 * @param {number[]} op - Array of operation types
 *
 * @returns {string} - The k-th character from 'a' to 'z'
 */
const kthCharacter = (k, op) => {
  // Track the cumulative character shift from operations
  let characterShift = 0
  // Find the highest bit position for the given k
  let currentBitIndex = Math.floor(Math.log2(k - 1))
  // Alphabet string for character lookup
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  while (k > 1) {
    // Calculate power of 2 for current bit position
    const powerOfTwo = 2 ** currentBitIndex

    if (k > powerOfTwo) {
      // Add operation value to shift and reduce k
      characterShift += op[currentBitIndex]
      k -= powerOfTwo
    }

    // Move to next lower bit position
    currentBitIndex--
  }

  // Return character at shifted position (wrap around alphabet)
  return alphabet[characterShift % 26]
}
