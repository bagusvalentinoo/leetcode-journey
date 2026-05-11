/**
 * Problem: 2553. Separate the Digits in an Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Separates each number into its individual digits
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number[]} Array of individual digits
 */
const separateDigits = (nums) => nums.join('').split('').map(Number)
