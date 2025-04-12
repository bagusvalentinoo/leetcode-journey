/**
 * Problem: 887. Super Egg Drop
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum moves to determine critical floor
 *
 * @param {number} k - The number of eggs
 * @param {number} n - The number of floors
 *
 * @returns {number} - The minimum number of moves required
 */
const superEggDrop = (k, n) => {
  // Initialize variables
  let moves = 0
  const dp = Array(k + 1).fill(0)

  // Perform binary search to find the minimum number of moves
  while (dp[k] < n) {
    // Increment moves
    moves++

    // Update DP array
    for (let i = k; i > 0; i--) dp[i] = dp[i] + dp[i - 1] + 1
  }

  // Return minimum moves
  return moves
}
