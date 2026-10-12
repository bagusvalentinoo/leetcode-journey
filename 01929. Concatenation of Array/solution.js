/**
 * Problem: 1929. Concatenation of Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the concatenation of the input array with itself
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number[]} Array containing nums twice in order
 */
const getConcatenation = (nums) =>
  // Duplicate the array by spreading it twice into a new array
  [...nums, ...nums]
