/**
 * Problem: 3643. Flip Square Submatrix Vertically
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reverses a k x k submatrix within a grid
 *
 * @param {number[][]} grid - Input matrix
 * @param {number} x - Starting row index of submatrix
 * @param {number} y - Starting column index of submatrix
 * @param {number} k - Size of square submatrix
 *
 * @returns {number[][]} Grid with reversed submatrix
 */
const reverseSubmatrix = (grid, x, y, k) => {
  // Pointer for top row of submatrix
  let topRow = x
  // Pointer for bottom row of submatrix
  let bottomRow = x + k - 1

  // Swap rows from top to bottom until they meet
  while (topRow < bottomRow) {
    // Swap all columns in current row pair
    for (let col = y; col < y + k; col++) {
      // Store current top row value
      const tempValue = grid[topRow][col]

      // Replace top row with bottom row value
      grid[topRow][col] = grid[bottomRow][col]
      // Replace bottom row with stored top row value
      grid[bottomRow][col] = tempValue
    }

    // Move pointers inward
    topRow++
    bottomRow--
  }

  // Return grid with reversed submatrix
  return grid
}
