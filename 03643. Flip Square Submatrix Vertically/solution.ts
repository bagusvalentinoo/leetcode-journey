/**
 * Problem: 3643. Flip Square Submatrix Vertically
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reverses a k x k submatrix within a grid
 *
 * @param grid - Input matrix
 * @param x - Starting row index of submatrix
 * @param y - Starting column index of submatrix
 * @param k - Size of square submatrix
 *
 * @returns Grid with reversed submatrix
 */
const reverseSubmatrix = (
  grid: number[][],
  x: number,
  y: number,
  k: number
): number[][] => {
  // Pointer for top row of submatrix
  let topRow: number = x
  // Pointer for bottom row of submatrix
  let bottomRow: number = x + k - 1

  // Swap rows from top to bottom until they meet
  while (topRow < bottomRow) {
    // Swap all columns in current row pair
    for (let col: number = y; col < y + k; col++) {
      // Store current top row value
      const tempValue: number = grid[topRow][col]

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
