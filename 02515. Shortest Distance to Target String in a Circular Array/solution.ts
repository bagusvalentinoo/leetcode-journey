/**
 * Problem: 2515. Shortest Distance to Target String in a Circular Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum steps to reach target word in circular array
 *
 * @param words - Array of words
 * @param target - Target word to find
 * @param startIndex - Starting index
 *
 * @returns Minimum steps or -1 if not found
 */
const closestTarget = (
  words: string[],
  target: string,
  startIndex: number
): number => {
  // Get length of words array
  const arrayLength: number = words.length

  // Initialize answer to infinity
  let minSteps: number = Infinity

  // Iterate through all indices
  for (let i: number = 0; i < arrayLength; i++) {
    // Check if current word matches target
    if (words[i] === target) {
      // Calculate clockwise distance
      const clockwiseSteps: number =
        (i - startIndex + arrayLength) % arrayLength
      // Calculate anticlockwise distance
      const anticlockwiseSteps: number =
        (startIndex - i + arrayLength) % arrayLength

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
