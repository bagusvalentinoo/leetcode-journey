/**
 * Problem: 1139. Largest 1-Bordered Square
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 54 ms (Beats 100%)
 */

/**
 * Finds the area of the largest square with 1s on all borders
 *
 * @param {number[][]} grid - 2D array of 0s and 1s
 *
 * @returns {number} - Area of the largest 1-bordered square
 */
const largest1BorderedSquare = (grid) => {
  // Get number of rows (m) and columns (n) in the grid
  const rowCount = grid.length
  const colCount = grid[0].length

  // Initialize horizontal and vertical prefix sum matrices
  // hor[i][j]: number of consecutive 1s ending at (i, j) horizontally
  // ver[i][j]: number of consecutive 1s ending at (i, j) vertically
  const hor = Array.from({ length: rowCount }, () => Array(colCount).fill(0))
  const ver = Array.from({ length: rowCount }, () => Array(colCount).fill(0))

  // Fill prefix sum matrices for horizontal and vertical 1s
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      // If current cell is 1, update hor and ver matrices
      if (grid[i][j] === 1) {
        // Horizontal: add 1 to previous horizontal count or start at 1
        hor[i][j] = (j > 0 ? hor[i][j - 1] : 0) + 1
        // Vertical: add 1 to previous vertical count or start at 1
        ver[i][j] = (i > 0 ? ver[i - 1][j] : 0) + 1
      }
    }
  }

  // The largest possible square side is the minimum of row and column count
  const maxSquareSide = Math.min(rowCount, colCount)

  // Try all possible square sizes from largest to smallest
  for (let side = maxSquareSide; side >= 1; side--) {
    // Iterate over all possible bottom-right corners of the square
    for (let i = side - 1; i < rowCount; i++) {
      for (let j = side - 1; j < colCount; j++) {
        // Check if all four borders of the square have enough consecutive 1s
        if (
          hor[i][j] >= side && // bottom border
          ver[i][j] >= side && // right border
          hor[i - (side - 1)][j] >= side && // top border
          ver[i][j - (side - 1)] >= side // left border
        )
          // Return area of the largest found square
          return side * side
      }
    }
  }

  // If no 1-bordered square is found, return 0
  return 0
}
