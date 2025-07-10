/**
 * Problem: 1751. Maximum Number of Events That Can Be Attended II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 58 ms (Beats 100%)
 */

/**
 * Calculate the maximum value from non-overlapping events
 *
 * @param {number[][]} events - Events as [start, end, value]
 * @param {number} k - Max events to attend
 *
 * @returns {number} - Max value from non-overlapping events
 */
const maxValue = (events, k) => {
  // Sort events by start time to enable binary search for next non-overlapping event
  events.sort((a, b) => a[0] - b[0])

  // Initialize 2D DP table: dp[attendedEvents][currentEventIndex] = maxValue
  // Using Uint32Array for memory efficiency with non-negative values
  const dp = Array.from(Array(k + 1), () => new Uint32Array(events.length + 1))

  // Process events from right to left (bottom-up DP approach)
  for (let eventIndex = events.length - 1; eventIndex >= 0; eventIndex--) {
    // Binary search bounds to find next non-overlapping event
    let leftBound = eventIndex + 1
    let rightBound = events.length

    // Binary search for the leftmost event that starts after current event ends
    while (leftBound < rightBound) {
      const middleIndex = (leftBound + rightBound) >> 1

      // If middle event starts after current event ends, search left half
      if (events[middleIndex][0] > events[eventIndex][1])
        rightBound = middleIndex
      // Otherwise, search right half
      else leftBound = middleIndex + 1
    }

    // Fill DP table for all possible number of attended events (0 to k-1)
    for (
      let attendedEventsCount = k - 1;
      attendedEventsCount >= 0;
      attendedEventsCount--
    )
      // Max of: (take current event + max from remaining) vs (skip current event)
      dp[attendedEventsCount][eventIndex] = Math.max(
        events[eventIndex][2] + dp[attendedEventsCount + 1][leftBound],
        dp[attendedEventsCount][eventIndex + 1]
      )
  }

  // Return maximum value achievable with 0 events attended starting from index 0
  return dp[0][0]
}
