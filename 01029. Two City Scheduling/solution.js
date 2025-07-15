/**
 * Problem: 1029. Two City Scheduling
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum cost to send n people to city A and n people to city B
 *
 * @param {number[][]} costs - Array of [cityA_cost, cityB_cost] for each person
 *
 * @returns {number} - Minimum total cost
 */
const twoCitySchedCost = (costs) => {
  // Sort costs by the difference between city A and city B costs
  // This prioritizes people who save more money by going to city A
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]))

  // Initialize total cost accumulator
  let totalCost = 0
  // Calculate half the total number of people (n people to each city)
  const n = costs.length / 2

  // Send first n people to city A (index 0) and next n people to city B (index 1)
  // First n people have the biggest savings going to city A
  for (let i = 0; i < n; i++) totalCost += costs[i][0] + costs[i + n][1]

  // Return the minimum total cost
  return totalCost
}
