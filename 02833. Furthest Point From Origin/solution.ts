/**
 * Problem: 2833. Furthest Point From Origin
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates furthest distance from origin after executing moves
 *
 * @param moves - String containing 'L', 'R', and '_' characters
 *
 * @returns Maximum possible distance from origin
 */
const furthestDistanceFromOrigin = (moves: string): number => {
  // Counters for left moves, right moves, and blank moves
  let leftCount: number = 0,
    rightCount: number = 0,
    blankCount: number = 0

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
