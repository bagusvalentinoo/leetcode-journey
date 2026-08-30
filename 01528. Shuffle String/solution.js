/**
 * Problem: 1528. Shuffle String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Restores the original string from a shuffled string using indices
 *
 * @param {string} s - The shuffled input string
 * @param {number[]} indices - Target position for each character
 *
 * @returns {string} The restored (original) string
 */
const restoreString = (s, indices) => {
  // Initialize result array with the same length as the input string
  const result = new Array(s.length)

  // Place each character at its target position
  for (let i = 0; i < s.length; i++)
    // Character at index i moves to position indices[i]
    result[indices[i]] = s[i]

  // Join the characters into the restored string
  return result.join('')
}
