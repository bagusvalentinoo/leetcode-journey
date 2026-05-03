/**
 * Problem: 796. Rotate String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if one string can be rotated to become another string
 *
 * @param {string} s - The original string
 * @param {string} goal - The target string
 *
 * @returns {boolean} Whether s can be rotated to become goal
 */
const rotateString = (s, goal) =>
  s.length === goal.length && (s + s).includes(goal)
