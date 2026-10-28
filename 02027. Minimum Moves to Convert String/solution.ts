/**
 * Problem: 2027. Minimum Moves to Convert String
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count moves that convert every X to O
 *
 * @param s - String containing X and O characters
 *
 * @returns Minimum number of moves
 */
const minimumMoves = (s: string): number => {
  // Store the number of moves needed
  let moves: number = 0

  // Skip the three positions converted by each move
  for (let i: number = 0; i < s.length; i++) {
    // Convert the current X and its next two positions
    if (s[i] === 'X') {
      moves++
      i += 2
    }
  }

  // Return the minimum number of moves
  return moves
}
