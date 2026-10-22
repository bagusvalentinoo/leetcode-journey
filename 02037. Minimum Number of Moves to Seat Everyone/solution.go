/**
 * Problem: 2037. Minimum Number of Moves to Seat Everyone
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minMovesToSeat(seats []int, students []int) int {
  // Sort seat positions so each seat is matched in ascending order.
  sort.Ints(seats)
  // Sort student positions to create the optimal one-to-one matching.
  sort.Ints(students)

  // Store the cumulative moves required for every matched pair.
  moves := 0

  // Match each sorted student with the seat at the same index.
  for i := 0; i < len(seats); i++ {
    // Calculate the difference between the current seat and student positions.
    difference := seats[i] - students[i]

    // Convert a negative difference into its absolute value.
    if difference < 0 {
      difference = -difference
    }

    // Add the distance needed for the current student to reach their seat.
    moves += difference
  }

  // Return the minimum total number of moves.
  return moves
}
