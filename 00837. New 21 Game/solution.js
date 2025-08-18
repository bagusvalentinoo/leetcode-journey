/**
 * Problem: 837. New 21 Game
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates probability Alice gets <= n points
 *
 * @param {number} n - Max allowed points
 * @param {number} k - Stop threshold
 * @param {number} maxPts - Max points per draw
 *
 * @returns {number} - Probability of <= n points
 */
const new21Game = (n, k, maxPts) => {
  // If Alice never draws or n is large enough to always win, probability is 1
  if (k === 0 || n > k + maxPts) return 1

  // Initialize DP array to store probabilities for each point total
  const dp = new Array(n + 1).fill(0)

  // sum keeps track of the window sum for DP transitions
  let sum = (dp[0] = 1)
  // result accumulates the final probability of <= n points
  let result = 0

  // Iterate through all possible point totals from 1 to n
  for (let i = 1; i <= n; i++) {
    // Calculate probability for current point total using window sum
    dp[i] = sum / maxPts

    // If still drawing, add current probability to window sum
    if (i < k) sum += dp[i]
    // If stopped, add current probability to result
    else result += dp[i]

    // Remove probability outside the window from sum
    if (i - maxPts >= 0) sum -= dp[i - maxPts]
  }

  // Return the accumulated probability of having <= n points
  return result
}
