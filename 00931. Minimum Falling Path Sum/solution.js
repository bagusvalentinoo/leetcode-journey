/**
 * Problem: 931. Minimum Falling Path Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the minimum falling path sum in a matrix
 *
 * @param {number[][]} matrix - Input n x n matrix
 *
 * @returns {number} - Minimum falling path sum
 */
const minFallingPathSum = (matrix) => {
  // Initialize the number of rows and columns in the matrix
  const n = matrix.length

  // Iterate from the second last row to the first row
  for (let row = n - 2; row >= 0; row--) {
    // Iterate through each column in the current row
    for (let col = 0; col < n; col++) {
      // Calculate the minimum falling path sum for the current cell
      const down = matrix[row + 1][col]
      // Calculate the minimum falling path sum for the left cell
      const left = col > 0 ? matrix[row + 1][col - 1] : Infinity
      // Calculate the minimum falling path sum for the right cell
      const right = col < n - 1 ? matrix[row + 1][col + 1] : Infinity

      // Update the current cell with the minimum falling path sum
      matrix[row][col] += Math.min(down, left, right)
    }
  }

  // Return the minimum value from the first row of the matrix
  return Math.min(...matrix[0])
}
