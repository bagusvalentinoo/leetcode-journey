/**
 * Problem: 1137. N-th Tribonacci Number
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the n-th Tribonacci number using a closed-form approximation
 *
 * @param {number} n - Index of the Tribonacci number
 *
 * @returns {number} - The n-th Tribonacci number
 */
const tribonacci = (n) => Math.round(0.336228117 * Math.pow(1.83928675521, n))
