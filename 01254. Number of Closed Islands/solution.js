/**
 * Problem: 1254. Number of Closed Islands
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts closed islands in a grid
 *
 * @param {number[][]} grid - 2D grid of 0s (land) and 1s (water)
 *
 * @returns {number} - Number of closed islands
 */
const closedIsland = (grid) => {
  // Get the number of rows and columns in the grid
  const rowCount = grid.length,
    colCount = grid[0].length

  // Depth-First Search to explore the island
  const dfs = (row, col) => {
    // If out of bounds, the island touches the border, not closed
    if (row < 0 || col < 0 || row >= rowCount || col >= colCount) return false
    // If cell is water, it's enclosed
    if (grid[row][col] === 1) return true

    // Mark the current land cell as visited by setting it to water
    grid[row][col] = 1

    // Recursively check all four directions
    const isTopClosed = dfs(row - 1, col),
      isBottomClosed = dfs(row + 1, col),
      isLeftClosed = dfs(row, col - 1),
      isRightClosed = dfs(row, col + 1)

    // Return true only if all directions are enclosed by water
    return isTopClosed && isBottomClosed && isLeftClosed && isRightClosed
  }

  // Initialize closed island counter
  let closedIslandCount = 0

  // Iterate through the grid, skipping border cells
  for (let row = 1; row < rowCount - 1; row++) {
    for (let col = 1; col < colCount - 1; col++) {
      // If cell is land and part of a closed island, increment counter
      if (grid[row][col] === 0 && dfs(row, col)) closedIslandCount++
    }
  }

  // Return the total number of closed islands found
  return closedIslandCount
}
