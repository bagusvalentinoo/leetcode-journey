/**
 * Problem: 3386. Button with Longest Push Time
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds button with the longest press time
 *
 * @param events - Array of [button, time] events
 *
 * @returns Button index with longest press time
 */
const buttonWithLongestTime = (events: number[][]): number => {
  // Initialize variable to store [button, duration] for the longest press
  let longestPress: [number | null, number] = [null, 0]

  // Iterate through each event in the array
  for (let eventIndex: number = 0; eventIndex < events.length; eventIndex++) {
    // Get current event
    const currentEvent: number[] = events[eventIndex]

    // For the first event, set it as initial value
    if (longestPress[0] === null) {
      // Set initial value
      longestPress = [currentEvent[0], currentEvent[1]]

      // Continue to next iteration
      continue
    }

    // Calculate duration of current press (time difference from previous event)
    const pressDuration: number = currentEvent[1] - events[eventIndex - 1][1]

    // If duration equals current maximum and button number is smaller, update
    if (pressDuration === longestPress[1] && longestPress[0]! > currentEvent[0])
      longestPress = [currentEvent[0], pressDuration]
    // If duration is greater than current maximum, update
    else if (pressDuration > longestPress[1])
      longestPress = [currentEvent[0], pressDuration]
  }

  // Return the button number with the longest press time
  return longestPress[0]!
}
