/**
 * Problem: 36. Valid Sudoku
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Validates if a 9x9 Sudoku board is valid according to Sudoku rules.
 *
 * @param {string[][]} board - 9x9 array with digits '1'-'9' or '.' for empty cells
 *
 * @returns {boolean} - True if board state is valid, false otherwise
 */
const isValidSudoku = (board) => {
  // Initialize bitmasks to track used digits in rows, columns, and 3x3 squares
  const rowMasks = new Array(9).fill(0),
    colMasks = new Array(9).fill(0),
    squareMasks = new Array(9).fill(0)

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      // Skip empty cells
      if (board[r][c] === '.') continue

      // Convert character to bit position (0-8)
      const val = board[r][c] - '1'

      // Check if digit already exists in current row, column, or square
      if (
        rowMasks[r] & (1 << val) ||
        colMasks[c] & (1 << val) ||
        squareMasks[Math.floor(r / 3) * 3 + Math.floor(c / 3)] & (1 << val)
      )
        return false

      // Mark digit as used in current row, column, and square
      rowMasks[r] |= 1 << val
      colMasks[c] |= 1 << val
      squareMasks[Math.floor(r / 3) * 3 + Math.floor(c / 3)] |= 1 << val
    }
  }

  return true
}
