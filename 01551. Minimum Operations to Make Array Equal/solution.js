/**
 * Problem: 1551. Minimum Operations to Make Array Equal
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum operations to make array with median n
 *
 * @param {number} n - Input number
 *
 * @returns {number} Minimum operations needed
 */
const minOperations = (n) => ~~((n * n) / 4)
