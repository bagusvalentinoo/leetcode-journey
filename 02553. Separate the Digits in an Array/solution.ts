/**
 * Problem: 2553. Separate the Digits in an Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Separates each number into its individual digits
 *
 * @param nums - Input array of integers
 *
 * @returns Array of individual digits
 */
const separateDigits = (nums: number[]): number[] =>
  nums.join('').split('').map(Number)
