/**
 * Problem: 1000. Minimum Cost to Merge Stones
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Merges stone piles with minimum cost, k piles at a time
 *
 * @param {number[]} stones - Stone counts in each pile
 * @param {number} k - Number of piles to merge per move
 *
 * @returns {number} - Minimum merge cost or -1 if impossible
 */
const mergeStones = (stones, k) => {
  // Number of stone piles
  const numPiles = stones.length

  // Check if merging is possible - needs to satisfy this mathematical property
  if ((numPiles - 1) % (k - 1) !== 0) return -1

  // Create prefix sum array for efficient range sum calculations
  const prefixSum = new Array(numPiles + 1).fill(0)
  for (let i = 0; i < numPiles; ++i) prefixSum[i + 1] = prefixSum[i] + stones[i]

  // Initialize DP table - dp[i][j] represents min cost to merge stones from i to j
  const dp = Array.from({ length: numPiles }, () => Array(numPiles).fill(0))

  // Solve for increasing subarray lengths
  for (let len = k; len <= numPiles; ++len) {
    // Examine each possible starting position
    for (let start = 0; start + len <= numPiles; ++start) {
      // Calculate end position
      const end = start + len - 1

      // Initialize with infinity to find minimum
      dp[start][end] = Infinity

      // Try different partition points
      for (let mid = start; mid < end; mid += k - 1)
        dp[start][end] = Math.min(
          dp[start][end],
          dp[start][mid] + dp[mid + 1][end]
        )

      // Add cost of merging if we can form exactly one pile
      if ((len - 1) % (k - 1) === 0)
        dp[start][end] += prefixSum[end + 1] - prefixSum[start]
    }
  }

  // Return minimum cost to merge all stones
  return dp[0][numPiles - 1]
}
