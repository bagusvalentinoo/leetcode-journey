/**
 * Problem: 790. Domino and Tromino Tiling
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the number of ways to tile a 2 x n board modulo 10^9 + 7
 *
 * @param {number} n - Board width
 *
 * @returns {number} - Ways to tile the board
 */
const numTilings = (n) => {
  // Initialize modulo value and DP array to store results for subproblems
  const mod = 1000000007
  const dp = new Array(n + 1).fill(0)

  // Base cases: ways to tile boards of width 0, 1, and 2
  dp[0] = 1
  dp[1] = 1
  dp[2] = 2

  // Fill DP array using recurrence relation
  for (let i = 3; i <= n; i++)
    dp[i] = (((2 * dp[i - 1]) % mod) + dp[i - 3]) % mod

  // Return the result for board width n
  return dp[n]
}
