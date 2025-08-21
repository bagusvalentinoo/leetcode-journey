/**
 * Problem: 1504. Count Submatrices With All Ones
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Returns the count of submatrices filled with ones
 *
 * @param {number[][]} mat - 2D binary matrix
 *
 * @returns {number} - Total submatrices with all ones
 */
const numSubmat = (mat) => {
  // Get the number of rows (m) and columns (n) in the matrix
  const rowCount = mat.length,
    colCount = mat[0].length

  // Preprocess each row to store the number of consecutive ones ending at each cell
  for (let row = 0; row < rowCount; row++)
    for (let col = 1; col < colCount; col++)
      // If current cell is 1, add the value from the previous cell in the row
      if (mat[row][col] === 1) mat[row][col] += mat[row][col - 1]

  // Initialize total count of submatrices filled with ones
  let totalSubmatrices = 0

  // Iterate over each column
  for (let col = 0; col < colCount; col++) {
    // For each row in the current column
    for (let row = 0; row < rowCount; row++) {
      // Skip if the current cell is 0 (cannot form submatrix ending here)
      if (mat[row][col] === 0) continue

      // Initialize minimum width for submatrices ending at (row, col)
      let minWidth = mat[row][col]

      // Move upwards from current row to count all possible submatrices ending at (row, col)
      for (let upRow = row; upRow >= 0; upRow--) {
        // Break if cell above is 0 (cannot extend submatrix upwards)
        if (mat[upRow][col] === 0) break

        // Update minimum width for the submatrix
        minWidth = Math.min(minWidth, mat[upRow][col])
        // Add the number of submatrices for this configuration
        totalSubmatrices += minWidth
      }
    }
  }

  // Return the total count of submatrices filled with ones
  return totalSubmatrices
}
