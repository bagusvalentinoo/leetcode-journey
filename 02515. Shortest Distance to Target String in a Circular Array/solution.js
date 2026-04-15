/**
 * Problem: 2515. Shortest Distance to Target String in a Circular Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum steps to reach target word in circular array
 *
 * @param {string[]} words - Array of words
 * @param {string} target - Target word to find
 * @param {number} startIndex - Starting index
 *
 * @returns {number} Minimum steps or -1 if not found
 */
const closestTarget = (words, target, startIndex) => {
  // Get length of words array
  const arrayLength = words.length

  // Initialize answer to infinity
  let minSteps = Infinity

  // Iterate through all indices
  for (let i = 0; i < arrayLength; i++) {
    // Check if current word matches target
    if (words[i] === target) {
      // Calculate clockwise distance
      const clockwiseSteps = (i - startIndex + arrayLength) % arrayLength
      // Calculate anticlockwise distance
      const anticlockwiseSteps = (startIndex - i + arrayLength) % arrayLength

      // Update minimum steps
      minSteps = Math.min(
        minSteps,
        Math.min(clockwiseSteps, anticlockwiseSteps)
      )
    }
  }

  // Return -1 if target not found, otherwise return minimum steps
  return minSteps === Infinity ? -1 : minSteps
}
