/**
 * Problem: 3602. Hexadecimal and Hexatrigesimal Conversion
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Converts square to hex and cube to base36, then concatenates
 *
 * @param {number} n - Input number
 *
 * @returns {string} Uppercase concatenated result
 */
const concatHex36 = (n) =>
  ((n * n).toString(16) + '' + (n * n * n).toString(36)).toUpperCase()
