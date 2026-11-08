/**
 * Problem: 2319. Check if Matrix Is X-Matrix
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check whether diagonal cells are non-zero and all other cells are zero
 *
 * @param {number[][]} grid - Square matrix to validate
 *
 * @returns {boolean} Whether the matrix is an X-Matrix
 */
const checkXMatrix = (grid) => {
  // Store the matrix dimension for diagonal comparisons
  const size = grid.length

  // Check every cell against its required diagonal value
  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      // Determine whether the current cell belongs to either diagonal
      const isDiagonal = row === column || row + column === size - 1

      // Reject a zero diagonal cell or a non-zero non-diagonal cell
      if (isDiagonal ? grid[row][column] === 0 : grid[row][column] !== 0)
        return false
    }
  }

  // Return true when every cell meets its requirement
  return true
}
