/**
 * Problem: 885. Spiral Matrix III
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Spiral traversal from (rStart, cStart)
 *
 * @param {number} rows - Number of rows in the grid
 * @param {number} cols - Number of columns in the grid
 * @param {number} rStart - Starting row index
 * @param {number} cStart - Starting column index
 *
 * @returns {number[][]} - Spiral order coordinates
 */
const spiralMatrixIII = (rows, cols, rStart, cStart) => {
  let count = 1 // Number of cells visited
  let moves = 1 // Number of moves in current direction
  let tempRow = rStart // Current row
  let tempCol = cStart // Current column
  const arr = [[rStart, cStart]] // Result array

  // Continue until all cells are visited
  while (count < rows * cols) {
    // Move right
    for (let i = 0; i < moves; i++) {
      tempCol++

      // Add valid cell
      if (tempCol >= 0 && tempRow >= 0 && tempCol < cols && tempRow < rows) {
        arr.push([tempRow, tempCol])
        count++
      }
    }

    // Move down
    for (let i = 0; i < moves; i++) {
      tempRow++

      // Add valid cell
      if (tempCol >= 0 && tempRow >= 0 && tempCol < cols && tempRow < rows) {
        arr.push([tempRow, tempCol])
        count++
      }
    }

    // Move left
    for (let i = 0; i < moves + 1; i++) {
      tempCol--

      // Add valid cell
      if (tempCol >= 0 && tempRow >= 0 && tempCol < cols && tempRow < rows) {
        arr.push([tempRow, tempCol])
        count++
      }
    }

    // Move up
    for (let i = 0; i < moves + 1; i++) {
      tempRow--

      // Add valid cell
      if (tempCol >= 0 && tempRow >= 0 && tempCol < cols && tempRow < rows) {
        arr.push([tempRow, tempCol])
        count++
      }
    }

    // Increase number of moves
    moves += 2
  }

  return arr
}
