/**
 * Problem: 43. Multiply Strings
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Multiplies two numeric strings and returns the product as a string
 *
 * @param {string} num1 - First number as a string
 * @param {string} num2 - Second number as a string
 *
 * @returns {string} - Product as a string
 */
const multiply = (num1, num2) => String(BigInt(num1) * BigInt(num2))
