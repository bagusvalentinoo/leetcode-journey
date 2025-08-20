/**
 * Problem: 1277. Count Square Submatrices with All Ones
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Returns the count of square submatrices with all ones in a binary matrix
 *
 * @param {number[][]} matrix - 2D binary matrix
 *
 * @returns {number} - Count of square submatrices with all ones
 */
const countSquares = (matrix) => {
  // Get the number of rows (m) and columns (n) in the matrix
  const m = matrix.length,
    n = matrix[0].length
  // Initialize total count of square submatrices with all ones
  let total = 0

  // Iterate over each cell in the matrix
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      // Skip if the current cell is 0 (cannot be top-left of a square of ones)
      if (matrix[row][col] === 0) continue

      // Initialize count of squares for this cell
      let squares = 0
      // Start with radius 1 (single cell)
      let radius = 1

      // Try to expand the square as much as possible
      while (radius <= m - row && radius <= n - col) {
        // Flag to indicate if a zero is found in the current square
        let foundZero = false

        // Check all cells in the current square of size 'radius'
        for (let x = row; x < row + radius; x++) {
          for (let y = col; y < col + radius; y++) {
            // If any cell is zero, break out of the loop
            if (matrix[x][y] === 0) foundZero = true
            if (foundZero) break
          }

          // Break outer loop if zero is found
          if (foundZero) break
        }

        // If zero is found, stop expanding the square
        if (foundZero) break

        // Increment count of squares for this cell
        squares++
        // Increase radius to check for larger square
        radius++
      }

      // Add squares found for this cell to total count
      total += squares
    }
  }

  // Return the total count of square submatrices with all ones
  return total
}
