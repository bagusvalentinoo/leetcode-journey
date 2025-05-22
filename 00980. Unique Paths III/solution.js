/**
 * Problem: 980. Unique Paths III
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count unique paths through a grid, visiting all empty squares exactly once
 *
 * @param {number[][]} grid - 2D grid where 1=start, 2=end, 0=empty, -1=obstacle
 *
 * @returns {number} - Number of valid paths
 */
const uniquePathsIII = (grid) => {
  // Count of empty squares in the grid
  let emptySquaresCount = 0,
    // Starting position coordinates
    startRow = 0,
    startCol = 0,
    // Counter for valid paths found
    pathCount = 0

  // Scan the grid to find starting position and count empty squares
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) emptySquaresCount++
      if (grid[i][j] === 1) {
        startRow = i
        startCol = j
      }
    }
  }

  // Recursive backtracking function to explore all possible paths
  const backtrack = (row, col, remaining) => {
    // Check if we've reached the end square
    if (grid[row][col] === 2) {
      // If all empty squares were visited, count this as a valid path
      if (remaining === 0) pathCount++

      return
    }

    // Store original value to restore after exploration
    const originalValue = grid[row][col]
    // Mark current square as visited
    grid[row][col] = -1

    // Explore top adjacent square if valid
    if (row > 0) {
      const topSquare = grid[row - 1][col]

      if (topSquare === 0) backtrack(row - 1, col, remaining - 1)
      if (topSquare === 2) backtrack(row - 1, col, remaining)
    }

    // Explore bottom adjacent square if valid
    if (row + 1 < grid.length) {
      const bottomSquare = grid[row + 1][col]

      if (bottomSquare === 0) backtrack(row + 1, col, remaining - 1)
      if (bottomSquare === 2) backtrack(row + 1, col, remaining)
    }

    // Explore left adjacent square if valid
    if (col > 0) {
      const leftSquare = grid[row][col - 1]

      if (leftSquare === 0) backtrack(row, col - 1, remaining - 1)
      if (leftSquare === 2) backtrack(row, col - 1, remaining)
    }

    // Explore right adjacent square if valid
    if (col + 1 < grid[0].length) {
      const rightSquare = grid[row][col + 1]

      if (rightSquare === 0) backtrack(row, col + 1, remaining - 1)
      if (rightSquare === 2) backtrack(row, col + 1, remaining)
    }

    // Restore original value for backtracking
    grid[row][col] = originalValue
  }

  // Begin backtracking from start position
  backtrack(startRow, startCol, emptySquaresCount)

  return pathCount
}
