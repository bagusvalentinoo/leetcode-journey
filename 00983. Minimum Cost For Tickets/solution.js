/**
 * Problem: 983. Minimum Cost For Tickets
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum travel cost using 1-day, 7-day, and 30-day passes
 *
 * @param {number[]} days - Days to travel
 * @param {number[]} costs - Costs of 1-day, 7-day, and 30-day passes
 *
 * @returns {number} - Minimum cost
 */
const mincostTickets = (days, costs) => {
  // Get the last travel day
  const lastTravelDay = days[days.length - 1]

  // Array to store minimum cost for each day
  const minCosts = new Array(lastTravelDay + 1)
  // Set of days we need to travel for quick lookup
  const travelDays = new Set(days)

  // Base case: no cost on day 0
  minCosts[0] = 0

  for (let day = 1; day <= lastTravelDay; day++) {
    if (travelDays.has(day)) {
      // If we travel on this day, take minimum of three options:
      // 1. Buy 1-day pass for today
      // 2. Buy 7-day pass covering today
      // 3. Buy 30-day pass covering today
      minCosts[day] = Math.min(
        minCosts[day - 1] + costs[0],
        (minCosts[day - 7] ?? 0) + costs[1],
        (minCosts[day - 30] ?? 0) + costs[2]
      )
    } else {
      // If we don't travel today, cost is same as yesterday
      minCosts[day] = minCosts[day - 1]
    }
  }

  // Return minimum cost for the last day
  return minCosts[lastTravelDay]
}
