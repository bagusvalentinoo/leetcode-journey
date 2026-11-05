/**
 * Problem: 2119. A Number After a Double Reversal
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if a number remains the same after a double reversal
 *
 * @param {number} num - Integer to check
 *
 * @returns {boolean} True if reversed2 equals num, false otherwise
 */
const isSameAfterReversals = (num) => num === 0 || num % 10 !== 0
