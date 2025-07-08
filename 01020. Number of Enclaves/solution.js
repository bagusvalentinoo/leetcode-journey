/**
 * Problem: 1020. Number of Enclaves
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Count the number of land cells that cannot reach the boundary of the grid
 *
 * @param {number[][]} grid - The binary matrix where 0 is sea and 1 is land
 *
 * @returns {number} - The number of enclosed land cells
 */
const numEnclaves = (grid) => {
  // Get grid dimensions
  const rows = grid.length,
    cols = grid[0].length

  // DFS to mark connected land cells as visited (convert to sea)
  const dfs = (row, col) => {
    // Base case: return if out of bounds or already water/visited
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === 0
    )
      return

    // Mark current land cell as visited by converting to water
    grid[row][col] = 0

    // Recursively explore all 4 adjacent cells
    dfs(row + 1, col)
    dfs(row - 1, col)
    dfs(row, col + 1)
    dfs(row, col - 1)
  }

  // Remove land cells connected to top and bottom boundaries
  for (let col = 0; col < cols; col++) {
    if (grid[0][col] === 1) dfs(0, col)
    if (grid[rows - 1][col] === 1) dfs(rows - 1, col)
  }

  // Remove land cells connected to left and right boundaries
  for (let row = 0; row < rows; row++) {
    if (grid[row][0] === 1) dfs(row, 0)
    if (grid[row][cols - 1] === 1) dfs(row, cols - 1)
  }

  // Count remaining land cells that are enclosed (not connected to boundary)
  let enclaves = 0

  for (let row = 0; row < rows; row++)
    for (let col = 0; col < cols; col++) if (grid[row][col] === 1) enclaves++

  return enclaves
}
