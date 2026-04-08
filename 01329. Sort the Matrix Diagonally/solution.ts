/**
 * Problem: 1329. Sort the Matrix Diagonally
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Sorts each diagonal of the matrix in ascending order
 *
 * @param mat - Input matrix
 *
 * @returns Matrix with diagonals sorted
 */
const diagonalSort = (mat: number[][]): number[][] => {
  // Get matrix dimensions
  const rows = mat.length,
    cols = mat[0].length

  // Helper function to sort a single diagonal starting at (row, col)
  const sortDiagonal = (startRow: number, startCol: number): void => {
    // Array to store values from the diagonal
    const diagonalValues: number[] = []

    // Temporary pointers to traverse the diagonal
    let currentRow: number = startRow,
      currentCol: number = startCol

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
    let index: number = 0

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
  for (let i: number = 0; i < rows; i++) sortDiagonal(i, 0)

  // Sort all diagonals starting from first row (top edge), skipping (0,0) already done
  for (let j: number = 1; j < cols; j++) sortDiagonal(0, j)

  // Return the matrix with sorted diagonals
  return mat
}
