/**
 * Problem: 3502. Minimum Cost to Reach Every Position
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Running minimum up to each index
 *
 * @param {number[]} cost - Input array
 *
 * @returns {number[]} Minimums per index
 */
const minCosts = (cost) => {
  // Initialize result array with same length as input
  const minimumCosts = new Array(cost.length)

  // Fill result array with running minimum
  for (let i = 0; i < minimumCosts.length; i++)
    // Current minimum is the smaller of:
    // - Previous minimum (if exists)
    // - Current cost value
    minimumCosts[i] = Math.min(i > 0 ? minimumCosts[i - 1] : Infinity, cost[i])

  // Return array of minimum costs to reach each position
  return minimumCosts
}
