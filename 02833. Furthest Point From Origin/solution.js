/**
 * Problem: 2833. Furthest Point From Origin
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates furthest distance from origin after executing moves
 *
 * @param {string} moves - String containing 'L', 'R', and '_' characters
 *
 * @returns {number} Maximum possible distance from origin
 */
const furthestDistanceFromOrigin = (moves) => {
  // Counters for left moves, right moves, and blank moves
  let leftCount = 0,
    rightCount = 0,
    blankCount = 0

  // Iterate through each character in the moves string
  for (const moveChar of moves) {
    // Increment left counter for 'L'
    if (moveChar === 'L') leftCount++
    // Increment right counter for 'R'
    else if (moveChar === 'R') rightCount++
    // Increment blank counter for '_'
    else blankCount++
  }

  // Maximum distance = absolute difference between left and right, plus all blanks
  return Math.abs(leftCount - rightCount) + blankCount
}
