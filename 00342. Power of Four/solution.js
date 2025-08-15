/**
 * Problem: 342. Power of Four
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if n is a power of four
 *
 * @param {number} n - Number to check
 *
 * @returns {boolean} - True if n is a power of four
 */
const isPowerOfFour = (n) => n > 0 && (n & (n - 1)) === 0 && (n - 1) % 3 === 0
