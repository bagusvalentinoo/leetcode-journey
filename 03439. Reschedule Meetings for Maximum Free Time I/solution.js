/**
 * Problem: 3439. Reschedule Meetings for Maximum Free Time I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Calculates maximum free time during an event
 *
 * @param {number} eventTime - Total event duration
 * @param {number} k - Number of attendees
 * @param {number[]} startTime - Start times for each attendee
 * @param {number[]} endTime - End times for each attendee
 *
 * @returns {number} - Maximum free time available
 */
const maxFreeTime = (eventTime, k, startTime, endTime) => {
  // Get the number of attendees
  const n = startTime.length
  // res: maximum free time found, t: current total busy time in sliding window
  let res = 0,
    t = 0

  // Iterate through each attendee to find optimal k-attendee subset
  for (let i = 0; i < n; i++) {
    // Add current attendee's busy time to sliding window
    t += endTime[i] - startTime[i]

    // Calculate the leftmost boundary of current k-attendee window
    const left = i <= k - 1 ? 0 : endTime[i - k]
    // Calculate the rightmost boundary (next attendee's start or event end)
    const right = i === n - 1 ? eventTime : startTime[i + 1]

    // Calculate free time for current window and update maximum
    res = Math.max(res, right - left - t)

    // Remove the leftmost attendee from sliding window when window size exceeds k
    if (i >= k - 1) t -= endTime[i - k + 1] - startTime[i - k + 1]
  }

  return res
}
