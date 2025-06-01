/**
 * Problem: 2929. Distribute Candies Among Children II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 48 ms (Beats 100%)
 */

/**
 * Count ways to distribute n candies among 3 children with a maximum per child
 *
 * @param {number} n - Total candies
 * @param {number} limit - Maximum candies per child
 *
 * @returns {number} - Number of valid distributions
 */
const distributeCandies = (n, limit) => {
  // Helper function to calculate combinations C(k,2)
  const combinations = (k) => (k >= 0 ? (k * (k - 1)) / 2 : 0)

  // Start with total possible distributions without limits
  let count = combinations(n + 2)
  // Subtract distributions where one child exceeds limit
  count -= 3 * combinations(n - (limit + 1) + 2)
  // Add back distributions where two children exceed limit (to avoid double-counting)
  count += 3 * combinations(n - 2 * (limit + 1) + 2)
  // Subtract distributions where all three children exceed limit
  count -= combinations(n - 3 * (limit + 1) + 2)

  return count
}
