/**
 * Problem: 956. Tallest Billboard
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 48 ms (Beats 100%)
 */

/**
 * Returns the maximum possible height of a balanced billboard
 *
 * @param {number[]} rods - Available rod lengths
 *
 * @returns {number} - Maximum achievable height
 */
const tallestBillboard = (rods) => {
  // dp stores the maximum height possible for each difference between left and right supports
  const dp = { 0: 0 }

  // Process each rod
  for (const rod of rods) {
    // Create a copy of current dp state before modifications
    const curr = { ...dp }

    // Evaluate all existing difference states
    for (let diff in curr) {
      diff = parseInt(diff)
      const height = curr[diff]

      // Option 1: Add rod to taller side, increasing difference
      const newDiff1 = diff + rod
      dp[newDiff1] = Math.max(dp[newDiff1] || 0, height)

      // Option 2: Add rod to shorter side, decreasing difference
      const newDiff2 = Math.abs(diff - rod)
      const newHeight = height + Math.min(rod, diff)
      dp[newDiff2] = Math.max(dp[newDiff2] || 0, newHeight)
    }
  }

  // Return max height when supports are balanced (difference = 0)
  return dp[0]
}
