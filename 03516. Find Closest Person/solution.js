/**
 * Problem: 3516. Find Closest Person
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns 0 if x is closer to z, 1 if y is closer to z
 *
 * @param {number} x - First value to compare
 * @param {number} y - Second value to compare
 * @param {number} z - Target value to compare against
 *
 * @returns {number} - 0 if x is closer, 1 if y is closer
 */
const findClosest = (x, y, z) => {
  // Calculate the absolute difference between x and z
  const diffX = Math.abs(x - z)
  // Calculate the absolute difference between y and z
  const diffY = Math.abs(y - z)

  // Return 0 if diffX is less than diffY (x is closer), 1 if diffY is less than diffX (y is closer)
  // Uses bitwise shift to convert boolean to number (true -> 1, false -> 0)
  return (diffX !== diffY) << (diffX > diffY)
}
