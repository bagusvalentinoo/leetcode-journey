/**
 * Problem: 2037. Minimum Number of Moves to Seat Everyone
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Match sorted students with sorted seats to minimize total movement
 *
 * @param seats - Available seat positions
 * @param students - Student positions
 *
 * @returns Minimum total number of moves
 */
const minMovesToSeat = (seats: number[], students: number[]): number => {
  // Sort seat positions in ascending order for optimal matching
  seats.sort((a: number, b: number): number => a - b)
  // Sort student positions in ascending order for optimal matching
  students.sort((a: number, b: number): number => a - b)

  // Sum the distance between each student and the seat at the same index
  return seats.reduce(
    (totalMoves: number, seat: number, index: number): number =>
      totalMoves + Math.abs(seat - students[index]),
    0
  )
}
