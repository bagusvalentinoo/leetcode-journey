/**
 * Problem: 1700. Number of Students Unable to Eat Lunch
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts students unable to eat using preference counts
 *
 * @param {number[]} students - Student sandwich preferences (0 or 1)
 * @param {number[]} sandwiches - Sandwich stack from top to bottom (0 or 1)
 *
 * @returns {number} Number of students unable to eat
 */
const countStudents = (students, sandwiches) => {
  // Count students preferring circular (0) and square (1)
  let circularStudents = 0,
    squareStudents = 0

  // Tally each student preference
  for (const preference of students) {
    // Increment matching preference bucket
    if (preference === 0) circularStudents++
    else squareStudents++
  }

  // Serve sandwiches from top of stack
  for (const sandwich of sandwiches) {
    // Handle circular sandwich request
    if (sandwich === 0) {
      // No circular lover left, remaining square lovers cannot eat
      if (circularStudents === 0) return squareStudents
      // One circular lover takes this sandwich
      circularStudents--
    } else {
      // No square lover left, remaining circular lovers cannot eat
      if (squareStudents === 0) return circularStudents
      // One square lover takes this sandwich
      squareStudents--
    }
  }

  // All sandwiches taken, nobody left hungry
  return 0
}
