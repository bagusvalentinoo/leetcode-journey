/**
 * Problem: 1219. Path with Maximum Gold
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 93 ms (Beats 100%)
 */

/**
 * Finds the maximum gold collectible from the grid
 *
 * @param {number[][]} grid - 2D array of gold values
 *
 * @returns {number} - Maximum gold collected
 */
const getMaximumGold = (grid) => {
  // Get the number of rows and columns in the grid
  const numRows = grid.length,
    numCols = grid[0].length

  // Helper function to check if a cell is within bounds and contains gold
  const isValidGoldCell = (row, col) =>
    0 <= row && row < numRows && 0 <= col && col < numCols && grid[row][col] > 0

  // Directions for moving: right, left, down, up
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0] // up
  ]

  // Depth-first search to collect maximum gold from a starting cell
  const collectGoldDFS = (row, col) => {
    // If cell is invalid or has no gold, return 0
    if (!isValidGoldCell(row, col)) return 0

    // Store the current cell's gold amount
    let currentGold = grid[row][col]

    // Mark the cell as visited by negating its value
    grid[row][col] *= -1

    // Recursively collect gold from adjacent cells and add the maximum found
    currentGold += Math.max(
      ...directions.map((dir) => collectGoldDFS(row + dir[0], col + dir[1]))
    )

    // Restore the cell's original gold value after DFS
    grid[row][col] *= -1

    // Return the total gold collected from this path
    return currentGold
  }

  // Variable to keep track of the maximum gold collected
  let maxGold = 0

  // Iterate through each cell in the grid
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      // Skip cells that do not contain gold
      if (!isValidGoldCell(row, col)) continue

      // Count the number of adjacent cells that contain gold
      const adjacentGoldCells = directions.filter((dir) =>
        isValidGoldCell(row + dir[0], col + dir[1])
      ).length

      // Start DFS from cells with 2 or fewer adjacent gold cells
      if (adjacentGoldCells <= 2)
        maxGold = Math.max(maxGold, collectGoldDFS(row, col))
    }
  }

  // Return the maximum gold collected from the grid
  return maxGold
}
