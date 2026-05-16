/**
 * Problem: 3386. Button with Longest Push Time
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds button with the longest press time
 *
 * @param {number[][]} events - Array of [button, time] events
 *
 * @returns {number} Button index with longest press time
 */
const buttonWithLongestTime = (events) => {
  // Initialize min variable to store [button, duration] for the longest press
  let longestPress = [null, 0]

  // Iterate through each event in the array
  for (let eventIndex = 0; eventIndex < events.length; eventIndex++) {
    // Get current event
    const currentEvent = events[eventIndex]

    // For the first event, set it as initial value
    if (longestPress[0] === null) {
      // Set initial value
      longestPress = currentEvent

      // Continue
      continue
    }

    // Calculate duration of current press (time difference from previous event)
    const pressDuration = currentEvent[1] - events[eventIndex - 1][1]

    // If duration equals current maximum and button number is smaller, update
    if (pressDuration === longestPress[1] && longestPress[0] > currentEvent[0])
      longestPress = [currentEvent[0], pressDuration]
    // If duration is greater than current maximum, update
    else if (pressDuration > longestPress[1])
      longestPress = [currentEvent[0], pressDuration]
  }

  // Return the button number with the longest press time
  return longestPress[0]
}
