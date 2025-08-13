/**
 * Problem: 326. Power of Three
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Determines if a given integer is a power of three
 *
 * @param {number} n - The integer to check
 *
 * @returns {boolean} - True if n is a power of three, otherwise false
 */
const isPowerOfThree = (n) => n > 0 && 1162261467 % n === 0
