/**
 * Problem: 1323. Maximum 69 Number
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Changes at most one '6' to '9' to maximize the given number
 *
 * @param {number} num - Number with digits 6 and 9
 *
 * @returns {number} - Maximum possible number
 */
const maximum69Number = (num) => parseInt(num.toString().replace('6', '9'))
