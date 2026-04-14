/**
 * Problem: 3870. Count Commas in Range
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts commas needed when writing numbers from 1 to n
 *
 * @param {number} n - Upper bound of the range
 *
 * @returns {number} Number of commas needed
 */
const countCommas = (n) => Math.max(0, n - 999)
