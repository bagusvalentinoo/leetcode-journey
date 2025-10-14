/**
 * Problem: 1275. Find Winner on a Tic Tac Toe Game
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines the result of a Tic-Tac-Toe game
 *
 * @param {number[][]} moves - List of moves [row, col]
 *
 * @returns {string} - Winner ('A', 'B'), 'Draw', or 'Pending'
 */
const tictactoe = (moves) => {
  // Initialize a 3x3 Tic-Tac-Toe board with -1 representing empty cells
  const board = Array.from({ length: 3 }, () => Array(3).fill(-1))

  // Helper function to check if any row, column, or diagonal has the same non-empty value
  const hasWinner = (board) => {
    // Check each row for a winner
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] === board[row][1] &&
        board[row][1] === board[row][2] &&
        board[row][0] !== -1
      )
        return true
    }

    // Check each column for a winner
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col] &&
        board[0][col] !== -1
      )
        return true
    }

    // Check the main diagonal for a winner
    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== -1
    )
      return true

    // Check the anti-diagonal for a winner
    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== -1
    )
      return true

    // No winner found
    return false
  }

  // Iterate through each move and update the board accordingly
  for (let moveIndex = 0; moveIndex < moves.length; moveIndex++) {
    let playerMark

    // Player A uses 'X', Player B uses '0'
    if (moveIndex % 2 === 0) {
      board[moves[moveIndex][0]][moves[moveIndex][1]] = 'X'
      playerMark = 'X'
    } else {
      board[moves[moveIndex][0]][moves[moveIndex][1]] = '0'
      playerMark = '0'
    }

    // Only check for a winner after the fifth move
    if (moveIndex < 4) continue
    if (hasWinner(board)) return playerMark === 'X' ? 'A' : 'B'
  }

  // If there are still moves left, the game is pending
  if (moves.length < 9) return 'Pending'

  // If all moves are played and no winner, it's a draw
  return 'Draw'
}
