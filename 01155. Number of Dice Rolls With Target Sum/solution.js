/**
 * Problem: 1155. Number of Dice Rolls With Target Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

/**
 * Returns the number of ways to roll `n` dice with `k` faces to sum to `target`
 *
 * @param {number} n - Number of dice
 * @param {number} k - Number of faces per die
 * @param {number} target - Target sum
 *
 * @returns {number} - Number of ways
 */
const numRollsToTarget = (n, k, target) => {
  // Define modulo constant to prevent integer overflow
  const MOD = 10 ** 9 + 7

  // Initialize two DP arrays to store ways to reach each sum
  let currentDP = new Array(target + 1).fill(0),
    nextDP = new Array(target + 1).fill(0)

  // Base case: one way to reach sum 0 with 0 dice
  currentDP[0] = 1

  // Iterate over each die
  for (let dice = 1; dice <= n; ++dice) {
    // Initialize prefix sum for sliding window
    let prefixSum = currentDP[0]

    // Iterate over each possible sum
    for (let sum = 1; sum <= target; ++sum) {
      // Number of ways to reach current sum with current dice
      nextDP[sum] = prefixSum

      // Update prefix sum for next iteration
      prefixSum = (prefixSum + currentDP[sum]) % MOD

      // Remove ways that exceed the face limit
      if (sum >= k) prefixSum = (prefixSum - currentDP[sum - k] + MOD) % MOD
    }

    // Swap DP arrays for next iteration
    ;[currentDP, nextDP] = [nextDP, currentDP]

    // Reset nextDP base case for next dice
    nextDP[0] = 0
  }

  // Return number of ways to reach target sum with n dice
  return currentDP[target]
}
