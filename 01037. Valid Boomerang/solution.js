/**
 * Problem: 1037. Valid Boomerang
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check if three points form a boomerang
 *
 * @param {number[][]} points - Array of three points [x, y]
 *
 * @returns {boolean} - True if points form a boomerang
 */
const isBoomerang = (points) =>
  (points[0][0] - points[1][0]) * (points[0][1] - points[2][1]) !==
  (points[0][0] - points[2][0]) * (points[0][1] - points[1][1])
