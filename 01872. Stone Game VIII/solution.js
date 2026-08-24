/**
 * Problem: 1872. Stone Game VIII
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the maximum score difference Alice can achieve in Stone Game VIII
 *
 * @param {number[]} stones - Values of the stones in a row
 *
 * @returns {number} Maximum score difference (Alice - Bob)
 */
const stoneGameVIII = (stones) => {
  // Get the number of stones
  const stoneCount = stones.length

  // Calculate prefix sums in-place
  for (let i = 1; i < stoneCount; i++) stones[i] += stones[i - 1]

  // Initialize max score difference with taking all stones
  let maxScoreDiff = stones[stoneCount - 1]

  // Iterate backwards to find optimal score difference
  for (let i = stoneCount - 2; i >= 1; i--)
    maxScoreDiff = Math.max(maxScoreDiff, stones[i] - maxScoreDiff)

  // Return the maximum score difference Alice can achieve
  return maxScoreDiff
}
