/**
 * Problem: 1929. Concatenation of Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the concatenation of the input array with itself
 *
 * @param nums - Input array of integers
 *
 * @returns Array containing nums twice in order
 */
const getConcatenation = (nums: number[]): number[] =>
  // Duplicate the array by spreading it twice into a new array
  [...nums, ...nums]
