/**
 * Problem: 2073. Time Needed to Buy Tickets
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func timeRequiredToBuy(tickets []int, k int) int {
  // Store the number of tickets the target person needs
  targetTickets := tickets[k]
  // Track the total number of ticket purchases before the target person leaves
  time := 0

  // Count each person's purchases before the target person finishes
  for i, ticketCount := range tickets {
    // Limit people after the target to one fewer turn
    maximumPurchases := targetTickets
    if i > k {
      maximumPurchases--
    }
    // Add this person's purchases to the total time
    if ticketCount < maximumPurchases {
      time += ticketCount
    } else {
      time += maximumPurchases
    }
  }

  // Return the time when the target person buys their final ticket
  return time
}
