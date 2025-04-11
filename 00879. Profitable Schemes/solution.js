/**
 * Problem: 879. Profitable Schemes
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 22 ms (Beats 100%)
 */

/**
 * Counts profitable schemes given constraints on members and profit
 *
 * @param {number} n - Maximum members
 * @param {number} minProfit - Minimum profit
 * @param {number[]} group - Members required for each crime
 * @param {number[]} profit - Profit generated by each crime
 *
 * @returns {number} - The number of profitable schemes modulo 1e9 + 7
 */
const profitableSchemes = (n, minProfit, group, profit) => {
  // Constants
  const MOD = 1e9 + 7

  // DP table: dp[m][p] = number of ways to use m members to generate at least p profit
  const dp = Array.from({ length: n + 1 }, (_) => Array(minProfit + 1).fill(0))

  // Base case: 1 way to generate 0 profit with 0 members
  for (let i = 0; i <= n; i++) dp[i][0] = 1

  // Fill DP table
  for (let i = 0; i <= group.length; i++) {
    // Current crime members and profit
    const member = group[i]
    const earn = profit[i]

    // Update DP table in reverse to avoid overwriting
    for (let j = n; j >= member; j--)
      for (let k = minProfit; k >= 0; k--)
        dp[j][k] = (dp[j][k] + dp[j - member][Math.max(0, k - earn)]) % MOD
  }

  // Return number of ways to generate at least minProfit with n members
  return dp[n][minProfit]
}
