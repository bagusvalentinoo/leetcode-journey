/**
 * Problem: 2144. Minimum Cost of Buying Candies With Discount
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum cost by taking two most expensive items for free
 *
 * @param cost - Array of item costs
 *
 * @returns Minimum total cost
 */
const minimumCost = (cost: number[]): number => {
  // Sort costs in descending order (highest to lowest)
  cost.sort((a, b) => b - a)

  // Initialize total sum accumulator
  let totalSum: number = 0

  // Iterate through array in steps of 3 (take 2, skip 1)
  for (let i: number = 0; i < cost.length; i += 3) {
    // Add the first item of each group (most expensive in that group)
    totalSum += cost[i]

    // If there is a second item in the group, add it to the total sum
    if (i + 1 < cost.length) totalSum += cost[i + 1]
  }

  // Return the calculated total cost
  return totalSum
}
