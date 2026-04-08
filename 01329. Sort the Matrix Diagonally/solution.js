/**
 * Problem: 1329. Sort the Matrix Diagonally
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Sorts each diagonal of the matrix in ascending order
 *
 * @param {number[][]} mat - Input matrix
 *
 * @returns {number[][]} Matrix with diagonals sorted
 */
const diagonalSort = (mat) => {
  // Get matrix dimensions
  const rows = mat.length,
    cols = mat[0].length

  // Helper function to sort a single diagonal starting at (row, col)
  const sortDiagonal = (startRow, startCol) => {
    // Array to store values from the diagonal
    const diagonalValues = []

    // Temporary pointers to traverse the diagonal
    let currentRow = startRow,
      currentCol = startCol

    // Collect all values from the diagonal
    while (currentRow < rows && currentCol < cols) {
      // Add current cell value to array
      diagonalValues.push(mat[currentRow][currentCol])

      // Move to next cell along the diagonal
      currentRow++
      currentCol++
    }

    // Sort the diagonal values in ascending order
    diagonalValues.sort((a, b) => a - b)

    // Reset pointers to traverse the diagonal again
    currentRow = startRow
    currentCol = startCol

    // Index to track position in sorted array
    let index = 0

    // Place sorted values back into the diagonal
    while (currentRow < rows && currentCol < cols) {
      // Assign sorted value to current cell
      mat[currentRow][currentCol] = diagonalValues[index++]

      // Move to next cell along the diagonal
      currentRow++
      currentCol++
    }
  }

  // Sort all diagonals starting from first column (left edge)
  for (let i = 0; i < rows; i++) sortDiagonal(i, 0)

  // Sort all diagonals starting from first row (top edge), skipping (0,0) already done
  for (let j = 1; j < cols; j++) sortDiagonal(0, j)

  // Return the matrix with sorted diagonals
  return mat
}
