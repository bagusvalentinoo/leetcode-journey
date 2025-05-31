/**
 * Problem: 999. Available Captures for Rook
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts the number of pawns the white rook can attack on the chessboard
 *
 * @param {character[][]} board - The 8x8 chessboard with 'R', 'B', 'p', and '.'
 *
 * @returns {number} - The number of pawns the rook can attack
 */
const numRookCaptures = (board) => {
  // Initialize variables to track the rook's position
  let rookRow = 0
  let rookCol = 0
  let isRookFound = false

  // Locate the rook's position on the board
  for (let row = 0; row < 8 && !isRookFound; row++)
    for (let col = 0; col < 8 && !isRookFound; col++)
      if (board[row][col] === 'R') {
        rookRow = row
        rookCol = col
        isRookFound = true
      }

  // Counter for pawns that can be captured
  let capturedPawnsCount = 0

  // Check upwards for pawns to capture
  for (let row = rookRow - 1; row >= 0; row--) {
    if (board[row][rookCol] === 'B') break
    if (board[row][rookCol] === 'p') {
      capturedPawnsCount++
      break
    }
  }

  // Check downwards for pawns to capture
  for (let row = rookRow + 1; row < 8; row++) {
    if (board[row][rookCol] === 'B') break
    if (board[row][rookCol] === 'p') {
      capturedPawnsCount++
      break
    }
  }

  // Check leftwards for pawns to capture
  for (let col = rookCol - 1; col >= 0; col--) {
    if (board[rookRow][col] === 'B') break
    if (board[rookRow][col] === 'p') {
      capturedPawnsCount++
      break
    }
  }

  // Check rightwards for pawns to capture
  for (let col = rookCol + 1; col < 8; col++) {
    if (board[rookRow][col] === 'B') break
    if (board[rookRow][col] === 'p') {
      capturedPawnsCount++
      break
    }
  }

  return capturedPawnsCount
}
