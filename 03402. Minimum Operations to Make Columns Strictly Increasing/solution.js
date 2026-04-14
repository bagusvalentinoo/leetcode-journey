/**
 * Problem: 3402. Minimum Operations to Make Columns Strictly Increasing
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum operations to make each column strictly increasing
 *
 * @param {number[][]} grid - Input 2D grid
 *
 * @returns {number} Minimum operations needed
 */
const minimumOperations = (grid) => {
  // If only one row, no operations needed
  if (grid.length === 1) return 0

  // Initialize operations counter and column pointer
  let operations = 0,
    column = 0

  // Get number of columns in the grid
  const columnCount = grid[0].length

  // Process each column independently
  while (column < columnCount) {
    // Iterate through rows from top to bottom
    for (let row = 1; row < grid.length; row++) {
      // Check if current value is not greater than previous row's value
      if (grid[row][column] <= grid[row - 1][column]) {
        // Calculate how much to increase to make it strictly greater
        const increment = grid[row - 1][column] - grid[row][column] + 1

        // Apply increment to current cell
        grid[row][column] = grid[row][column] + increment

        // Add increment to total operations count
        operations += increment
      }
    }

    // Move to next column
    column++
  }

  // Return total operations
  return operations
}
