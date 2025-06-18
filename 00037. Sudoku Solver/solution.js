/**
 * Problem: 37. Sudoku Solver
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 7 ms (Beats 100%)
 */

/**
 * Solves a Sudoku puzzle using backtracking and bitmasking
 *
 *  @param {Array} board - 2D array representing the Sudoku board
 *
 *  @returns {void} - The board is modified in place to contain the solution
 */
const solveSudoku = (board) => {
  // Count empty cells to track remaining work
  let emptyCellCount = 0

  // Bitmasks to track used numbers in each row, column, and 3x3 box
  const rowMasks = new Array(9).fill(0),
    colMasks = new Array(9).fill(0),
    boxMasks = new Array(9).fill(0)

  // Initialize bitmasks by scanning the board
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] !== '.') {
        const boxIndex = 3 * Math.floor(r / 3) + Math.floor(c / 3)

        on(rowMasks, r, parseInt(board[r][c] - 1))
        on(colMasks, c, parseInt(board[r][c] - 1))
        on(boxMasks, boxIndex, parseInt(board[r][c] - 1))
      } else {
        emptyCellCount++
      }
    }
  }

  // Recursive backtracking function
  const backtrack = (emptyCellCount) => {
    // Base case: all cells filled
    if (emptyCellCount === 0) return true

    // Find the empty cell with minimum possible values
    const [r, c] = findMin(board, rowMasks, colMasks, boxMasks)

    const boxIndex = 3 * Math.floor(r / 3) + Math.floor(c / 3)

    // Store original bitmask values for backtracking
    const originalRowMask = rowMasks[r],
      originalColMask = colMasks[c],
      originalBoxMask = boxMasks[boxIndex]

    // Get intersection of constraints
    const constraintMask = rowMasks[r] | colMasks[c] | boxMasks[boxIndex]

    // Try each possible number (1-9)
    for (let i = 0; i < 9; i++) {
      if (has(constraintMask, i)) {
        // Place the number
        board[r][c] = (i + 1).toString()

        // Update bitmasks
        on(rowMasks, r, i)
        on(colMasks, c, i)
        on(boxMasks, boxIndex, i)

        // Recurse with one less empty cell
        if (backtrack(emptyCellCount - 1)) return true

        // Backtrack: remove the number and restore bitmasks
        board[r][c] = '.'
        rowMasks[r] = originalRowMask
        colMasks[c] = originalColMask
        boxMasks[boxIndex] = originalBoxMask
      }
    }

    return false
  }

  // Start the backtracking process
  backtrack(emptyCellCount)
}
/**
 * Sets bit at position v in array element at index i
 *
 *  @param {Array} arr - The array of bitmasks
 *  @param {number} i - The index in the array to modify
 *  @param {number} v - The bit position to set (0-8 for
 *
 * @returns {void}
 */
const on = (arr, i, v) => (arr[i] |= 1 << v)

/**
 * Checks if bit at position is NOT set (number is available)
 *
 * @param {number} val - The bitmask value to check
 * @param {number} bit - The bit position to check (0-8 for Sudoku)
 *
 * @returns {boolean} - True if the bit is NOT set, meaning the number is available
 *
 */
const has = (val, bit) => (val & (1 << bit)) === 0

/**
 * Finds empty cell with minimum possible values (MRV heuristic)
 *
 * @param {Array} board - The Sudoku board
 * @param {Array} rows - Bitmasks for each row
 * @param {Array} cols - Bitmasks for each column
 * @param {Array} boxes - Bitmasks for each 3x3 box
 *
 * @returns {Array} - Coordinates of the cell with minimum possibilities [row, col]
 */
const findMin = (board, rows, cols, boxes) => {
  // Initialize variables to track the empty cell with minimum possible values
  let minRow = -1,
    minCol = -1,
    minPossibleCount = Infinity

  // Search through all cells to find the one with fewest possibilities
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === '.') {
        // Calculate box index for current cell
        const boxIndex = 3 * Math.floor(r / 3) + Math.floor(c / 3)
        let possibleCount = 0

        // Get combined constraints from row, column, and box
        const combinedConstraints = rows[r] | cols[c] | boxes[boxIndex]

        // Count how many numbers are still possible for this cell
        for (let i = 0; i < 9; i++)
          if (has(combinedConstraints, i)) possibleCount++

        // Update minimum if this cell has fewer possibilities
        if (possibleCount < minPossibleCount) {
          minPossibleCount = possibleCount
          minRow = r
          minCol = c
        }
      }
    }
  }

  return [minRow, minCol]
}
