/**
 * Problem: 2037. Minimum Number of Moves to Seat Everyone
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Match sorted students with sorted seats to minimize total movement
 *
 * @param {number[]} seats - Available seat positions
 * @param {number[]} students - Student positions
 *
 * @returns {number} Minimum total number of moves
 */
const minMovesToSeat = (seats, students) => {
  // Sort seat positions in ascending order for optimal matching
  seats.sort((a, b) => a - b)
  // Sort student positions in ascending order for optimal matching
  students.sort((a, b) => a - b)

  // Sum the distance between each student and the seat at the same index
  return seats.reduce(
    (totalMoves, seat, index) => totalMoves + Math.abs(seat - students[index]),
    0
  )
}
