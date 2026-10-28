/**
 * Problem: 2027. Minimum Moves to Convert String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumMoves(s string) int {
  // Store the number of moves needed.
  moves := 0

  // Skip the three positions converted by each move.
  for i := 0; i < len(s); i++ {
    // Convert the current X and its next two positions.
    if s[i] == 'X' {
      moves++
      i += 2
    }
  }

  // Return the minimum number of moves.
  return moves
}
