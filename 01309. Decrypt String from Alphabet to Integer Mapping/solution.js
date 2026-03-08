/**
 * Problem: 1309. Decrypt String from Alphabet to Integer Mapping
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Decodes a string from "10#" to "z" format
 *
 * @param {string} s - Encoded string with numbers and #
 *
 * @returns {string} Decoded string
 */
const freqAlphabets = (s) =>
  s.replace(
    // Match either two digits followed by #, or single digit
    /(\d\d#|\d)/g,
    // Replace each match with corresponding letter
    (token) => {
      // Map of numbers to letters (a=1, b=2, ..., z=26)
      const num = token.length === 3 ? token.slice(0, 2) : token

      // Return the corresponding letter from the map
      return String.fromCharCode(96 + parseInt(num, 10))
    }
  )
