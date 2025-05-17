/**
 * Problem: 970. Powerful Integers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns all integers that can be expressed as x^i + y^j <= bound
 *
 * @param {number} x - First base
 * @param {number} y - Second base
 * @param {number} bound - Upper limit
 *
 * @returns {number[]} - Array of unique integers
 */
const powerfulIntegers = (x, y, bound) => {
  // Use a Set to store unique values
  const result = new Set()

  // Handle edge cases where x or y is 1 (avoid infinite loops)
  const xStep = x === 1 ? bound + 1 : x,
    yStep = y === 1 ? bound + 1 : y

  // Generate all possible x^i values up to bound
  for (let xi = 1; xi <= bound; xi *= xStep)
    // For each x^i, generate all possible y^j values where sum <= bound
    for (let yj = 1; xi + yj <= bound; yj *= yStep) result.add(xi + yj)

  // Convert Set to Array for the result
  return Array.from(result)
}
