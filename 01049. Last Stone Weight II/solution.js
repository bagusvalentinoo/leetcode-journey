/**
 * Problem: 1049. Last Stone Weight II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Finds the minimum difference between sums of two groups from the input array
 *
 * @param {number[]} stones - Array of positive integers
 *
 * @returns {number} Minimum difference between group sums
 */
const lastStoneWeightII = (stones) => {
  // Get the number of stones in the input array
  const n = stones.length

  // If there is only one stone, return the first stone (edge case)
  if (n === 1) return stones[0]
  // If there are two stones, return the absolute difference between them (edge case)
  if (n === 2) return Math.abs(stones[0] - stones[1])

  // Calculate the total sum of all stones (assuming stones are numbers)
  const totalWeight = stones.reduce((acc, cur) => (acc += cur), 0)

  // Find the target weight for one group (half of totalWeight, floored)
  const targetGroupWeight = Math.floor(totalWeight / 2)

  // Initialize a DP array to track achievable group weights
  const dp = Array(targetGroupWeight + 1).fill(false)

  // Base case: zero weight is always achievable
  dp[0] = true

  // For each stone, update the DP array to reflect achievable weights
  for (const stone of stones)
    for (
      let targetWeight = targetGroupWeight;
      targetWeight >= stone;
      targetWeight--
    )
      // Mark the current targetWeight as achievable if targetWeight - stone was achievable
      dp[targetWeight] = dp[targetWeight] || dp[targetWeight - stone]

  // Find the largest achievable group weight (closest to targetGroupWeight)
  const groupWeight = dp.findLastIndex((targetWeight) => targetWeight === true)

  // Return the minimum possible difference between two groups
  return totalWeight - 2 * groupWeight
}
