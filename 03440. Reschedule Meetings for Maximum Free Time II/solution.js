/**
 * Problem: 3440. Reschedule Meetings for Maximum Free Time II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the maximum free time available during an event
 *
 * @param {number} eventTime - Total time of the event
 * @param {number[]} startTime - Array of start times of the events
 * @param {number[]} endTime - Array of end times of the events
 *
 * @returns {number} - Maximum free time available during the event
 */
const maxFreeTime = (eventTime, startTime, endTime) => {
  // Get the number of events
  const n = startTime.length
  // Create a boolean array to track which events can be skipped
  const q = new Array(n).fill(false)

  // Initialize variables to track maximum free time from left and right
  let t1 = 0, // Maximum free time when processing from left to right
    t2 = 0 // Maximum free time when processing from right to left

  // Process events from both directions simultaneously
  for (let i = 0; i < n; i++) {
    // Check if current event (from left) can be skipped based on available free time
    if (endTime[i] - startTime[i] <= t1) q[i] = true

    // Update maximum free time from left: gap between current event start and previous event end
    t1 = Math.max(t1, startTime[i] - (i === 0 ? 0 : endTime[i - 1]))

    // Check if current event (from right) can be skipped based on available free time
    if (endTime[n - i - 1] - startTime[n - i - 1] <= t2) q[n - i - 1] = true

    // Update maximum free time from right: gap between next event start and current event end
    t2 = Math.max(
      t2,
      (i === 0 ? eventTime : startTime[n - i]) - endTime[n - i - 1]
    )
  }

  // Initialize result to track maximum free time
  let res = 0

  // Calculate maximum free time by considering each position
  for (let i = 0; i < n; i++) {
    // Define left boundary: either start of event time or end of previous event
    const left = i === 0 ? 0 : endTime[i - 1]
    // Define right boundary: either end of event time or start of next event
    const right = i === n - 1 ? eventTime : startTime[i + 1]

    // If current event can be skipped, free time is the entire gap
    if (q[i]) res = Math.max(res, right - left)
    // Otherwise, subtract the duration of current event from the gap
    else res = Math.max(res, right - left - (endTime[i] - startTime[i]))
  }

  // Return the maximum free time found
  return res
}
