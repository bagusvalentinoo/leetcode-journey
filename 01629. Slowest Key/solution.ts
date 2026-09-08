/**
 * Problem: 1629. Slowest Key
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the key with the longest press duration, breaking ties lexicographically
 *
 * @param releaseTimes - Release time of each keypress
 * @param keysPressed - Keys pressed in testing sequence
 *
 * @returns Key with the longest duration
 */
const slowestKey = (releaseTimes: number[], keysPressed: string): string => {
  // Initialize longest duration with first keypress duration
  let longestDuration: number = releaseTimes[0],
    answerKey: string = keysPressed[0]

  // Iterate through each subsequent keypress
  for (let i = 1; i < releaseTimes.length; i++) {
    // Compute current keypress duration as difference of consecutive release times
    const duration: number = releaseTimes[i] - releaseTimes[i - 1]

    // Update answer if duration is longer, or equal with lexicographically larger key
    if (
      duration > longestDuration ||
      (duration === longestDuration && keysPressed[i] > answerKey)
    ) {
      // Record the new longest duration
      longestDuration = duration
      // Record the key holding the longest duration
      answerKey = keysPressed[i]
    }
  }

  // Return the key with the longest duration
  return answerKey
}
