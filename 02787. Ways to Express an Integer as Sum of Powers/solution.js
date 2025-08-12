/**
 * Problem: 2787. Ways to Express an Integer as Sum of Powers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

/**
 * Counts ways to write n as a sum of unique x-th powers
 *
 * @param {number} n - Target sum
 * @param {number} x - Power exponent
 *
 * @returns {number} - Ways to express n as sum of unique x-th powers, mod 1e9+7
 */
const numberOfWays = (n, x) => {
  // Define the modulo constant as per problem statement
  const MOD = 1e9 + 7

  // Initialize a DP array where dp[i] will store the number of ways to write i as a sum of unique x-th powers
  const dp = Array(n + 1).fill(0)

  // There is one way to write 0: using no numbers
  dp[0] = 1

  // Iterate over all possible base numbers a such that a^x <= n
  for (let a = 1; ; a++) {
    // Compute a^x for the current base
    const power = Math.pow(a, x)

    // If the power exceeds n, no need to continue
    if (power > n) break

    // Update the DP array in reverse to ensure uniqueness (each power is used at most once)
    for (let j = n; j >= power; j--)
      // Add the number of ways to form (j - power) to dp[j]
      dp[j] = (dp[j] + dp[j - power]) % MOD
  }

  // Return the number of ways to write n as a sum of unique x-th powers, modulo MOD
  return dp[n]
}
