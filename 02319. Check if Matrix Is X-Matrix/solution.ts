/**
 * Problem: 2319. Check if Matrix Is X-Matrix
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check whether diagonal cells are non-zero and all other cells are zero
 *
 * @param grid - Square matrix to validate
 *
 * @returns Whether the matrix is an X-Matrix
 */
const checkXMatrix = (grid: number[][]): boolean => {
  // Store the matrix dimension for diagonal comparisons
  const size: number = grid.length

  // Check every cell against its required diagonal value
  for (let row: number = 0; row < size; row++) {
    for (let column: number = 0; column < size; column++) {
      // Determine whether the current cell belongs to either diagonal
      const isDiagonal: boolean = row === column || row + column === size - 1

      // Reject a zero diagonal cell or a non-zero non-diagonal cell
      if (isDiagonal ? grid[row][column] === 0 : grid[row][column] !== 0)
        return false
    }
  }

  // Return true when every cell meets its requirement
  return true
}
