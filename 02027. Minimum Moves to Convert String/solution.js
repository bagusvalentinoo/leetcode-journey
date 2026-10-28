/**
 * Problem: 2027. Minimum Moves to Convert String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count moves that convert every X to O
 *
 * @param {string} s - String containing X and O characters
 *
 * @returns {number} Minimum number of moves
 */
const minimumMoves = (s) => {
  // Store the number of moves needed
  let moves = 0

  // Skip the three positions converted by each move
  for (let i = 0; i < s.length; i++) {
    // Convert the current X and its next two positions
    if (s[i] === 'X') {
      moves++
      i += 2
    }
  }

  // Return the minimum number of moves
  return moves
}
