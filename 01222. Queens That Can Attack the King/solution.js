/**
 * Problem: 1222. Queens That Can Attack the King
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds all queens that can attack the king
 *
 * @param {number[][]} queens - Positions of queens
 * @param {number[]} king - Position of the king
 *
 * @returns {number[][]} - Attacking queens' positions
 */
const queensAttacktheKing = (queens, king) => {
  // Initialize an array to store positions of queens that can attack the king
  const attackingQueens = []

  // Create a Set for quick lookup of queen positions, encoding each position as a unique number
  const queenPositions = new Set(queens.map(([row, col]) => row * 8 + col))

  // Iterate over all 8 directions around the king (vertical, horizontal, and diagonal)
  for (let rowDirection = -1; rowDirection <= 1; rowDirection++) {
    for (let colDirection = -1; colDirection <= 1; colDirection++) {
      // Skip the case where both directions are zero (no movement)
      if (!rowDirection && !colDirection) continue

      // Start searching from the next cell in the current direction
      let currentRow = king[0] + rowDirection,
        currentCol = king[1] + colDirection

      // Continue moving in the current direction until out of bounds
      while (
        currentRow >= 0 &&
        currentRow < 8 &&
        currentCol >= 0 &&
        currentCol < 8
      ) {
        // Check if a queen exists at the current position
        if (queenPositions.has(currentRow * 8 + currentCol)) {
          // If found, add the position to the result and stop searching in this direction
          attackingQueens.push([currentRow, currentCol])
          break
        }

        // Move to the next cell in the current direction
        currentRow += rowDirection
        currentCol += colDirection
      }
    }
  }

  // Return the list of attacking queens' positions
  return attackingQueens
}
