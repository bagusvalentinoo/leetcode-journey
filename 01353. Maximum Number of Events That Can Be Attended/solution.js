/**
 * Problem: 1353. Maximum Number of Events That Can Be Attended
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 62 ms (Beats 100%)
 */

/**
 * Count the maximum number of events that can be attended
 *
 * @param {number[][]} events - Array of events [startDay, endDay]
 *
 * @returns {number} - Maximum number of events that can be attended
 */
const maxEvents = (events) => {
  // Sort events by end day to prioritize events that end earlier
  events.sort((a, b) => a[1] - b[1])

  // Find the maximum day across all events
  const maxDay = events.at(-1)[1]

  // Initialize union-find structure to track next available day
  const nextAvailableDay = new Array(maxDay + 2).fill(0).map((_, i) => i)

  // Find the next available day using path compression
  const findNextDay = (day) => {
    if (nextAvailableDay[day] !== day)
      nextAvailableDay[day] = findNextDay(nextAvailableDay[day])

    return nextAvailableDay[day]
  }

  // Count of events that can be attended
  let attendedCount = 0

  for (const event of events) {
    // Get the start and end day of the event
    const startDay = event[0]
    const endDay = event[1]

    // Find the next available day from start day
    const availableDay = findNextDay(startDay)

    // If available day is within event duration, attend the event
    if (availableDay <= endDay) {
      attendedCount++
      // Mark this day as used by pointing to next day
      nextAvailableDay[availableDay] = findNextDay(availableDay + 1)
    }
  }

  return attendedCount
}
