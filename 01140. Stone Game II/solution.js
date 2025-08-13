/**
 * Problem: 1140. Stone Game II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 7 ms (Beats 100%)
 */

/**
 * Returns the maximum stones Alice can collect in Stone Game II
 *
 * @param {number[]} piles - Stones in each pile
 *
 * @returns {number} - Maximum stones Alice can get
 */
const stoneGameII = (piles) => {
  // Get the number of piles
  const pileCount = piles.length

  // Initialize an array to store the suffix sums of stones
  const suffixSum = Array(pileCount).fill(0)

  // Set the last element of suffixSum to the last pile value
  suffixSum[pileCount - 1] = piles[pileCount - 1]

  // Compute suffix sums from right to left
  for (let i = pileCount - 2; i >= 0; i--) {
    // Each suffixSum[i] is the sum of piles[i] and suffixSum[i + 1]
    suffixSum[i] = suffixSum[i + 1] + piles[i]
  }

  // Initialize DP table for memoization, filled with -1
  const dp = Array(pileCount)
    .fill()
    .map(() => Array(pileCount).fill(-1))

  const getMaxStones = (index, maxTake) => {
    // Base case: If all piles are taken, return 0
    if (index === pileCount) return 0

    // If Alice can take all remaining piles, return their sum
    if (index + 2 * maxTake >= pileCount) return suffixSum[index]

    // If result is already computed, return it from DP table
    if (dp[index][maxTake] !== -1) return dp[index][maxTake]

    // Initialize result for current state
    let maxResult = 0

    // Try taking x piles, where x ranges from 1 to 2 * maxTake
    for (let x = 1; x <= 2 * maxTake; x++) {
      // Calculate the maximum stones Alice can collect by taking x piles
      maxResult = Math.max(
        maxResult,
        suffixSum[index] - getMaxStones(index + x, Math.max(maxTake, x))
      )
    }

    // Store the result in DP table and return
    return (dp[index][maxTake] = maxResult)
  }

  // Start the recursion from index 0 and M = 1
  return getMaxStones(0, 1)
}
