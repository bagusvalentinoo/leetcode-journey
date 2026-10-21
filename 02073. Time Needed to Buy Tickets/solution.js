/**
 * Problem: 2073. Time Needed to Buy Tickets
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculate the time for the person at position k to buy all tickets
 *
 * @param {number[]} tickets - Tickets each person needs to buy
 * @param {number} k - Position of the target person
 *
 * @returns {number} Time needed for the target person to finish
 */
const timeRequiredToBuy = (tickets, k) => {
  // Store the number of tickets the target person needs
  const targetTickets = tickets[k]
  // Track the total number of ticket purchases before the target person leaves
  let time = 0

  // Count each person's purchases before the target person finishes
  for (let i = 0; i < tickets.length; i++) {
    // Limit people after the target to one fewer turn
    const maximumPurchases = targetTickets - (i > k ? 1 : 0)

    // Add this person's purchases to the total time
    time += Math.min(tickets[i], maximumPurchases)
  }

  // Return the time when the target person buys their final ticket
  return time
}
