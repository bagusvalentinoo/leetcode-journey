/**
 * Problem: 1260. Shift 2D Grid
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Shifts a 2D grid by k positions
 *
 * @param {number[][]} grid - 2D array to shift
 * @param {number} k - Number of shifts
 *
 * @returns {number[][]} - Shifted 2D array
 */
const shiftGrid = (grid, k) => {
  // Flatten the 2D grid into a 1D array for easier shifting
  const flattenedGrid = grid.flat()

  // Get the number of columns in the grid
  const columnCount = grid[0].length

  // Initialize an array to store the shifted result
  const shiftedResult = []

  // Shift the flattened grid k times by moving the last element to the front
  while (k--) flattenedGrid.unshift(flattenedGrid.pop())

  // Reconstruct the shifted 1D array back into a 2D grid
  while (flattenedGrid.length)
    shiftedResult.push(flattenedGrid.splice(0, columnCount))

  // Return the shifted 2D grid
  return shiftedResult
}
