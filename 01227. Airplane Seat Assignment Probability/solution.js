/**
 * Problem: 1227. Airplane Seat Assignment Probability
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the probability the nth person gets their own seat
 *
 * @param {number} n - Number of people/seats
 *
 * @returns {number} - Probability
 */
const nthPersonGetsNthSeat = (n) => (n === 1 ? 1.0 : 0.5)
