/**
 * Problem: 778. Swim in Rising Water
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

/**
 * Returns the minimum time to reach the bottom-right cell
 *
 * @param {number[][]} grid - Elevation grid
 *
 * @returns {number} - Minimum time to reach (n-1, n-1)
 */
const swimInWater = (grid) => {
  // Get the size of the grid (n x n)
  const n = grid.length

  // Depth-first search to check if we can reach (n-1, n-1) at time t
  const dfs = (row, col, visited, time) => {
    // Check for out-of-bounds, already visited, or cell elevation too high
    if (
      row === -1 ||
      row === n ||
      col === -1 ||
      col === n ||
      visited[row][col] ||
      grid[row][col] > time
    )
      return false

    // Mark the current cell as visited
    visited[row][col] = true

    // If reached the bottom-right cell, return true
    if (row === n - 1 && col === n - 1) return true

    // Recursively search adjacent cells (down, right, up, left)
    return (
      dfs(row + 1, col, visited, time) ||
      dfs(row, col + 1, visited, time) ||
      dfs(row - 1, col, visited, time) ||
      dfs(row, col - 1, visited, time)
    )
  }

  // Initialize binary search boundaries for minimum time
  let minTime = 0,
    maxTime = n * n

  // Binary search to find the minimum time to reach (n-1, n-1)
  while (minTime < maxTime) {
    // Calculate the middle time value
    const midTime = Math.floor((minTime + maxTime) / 2)
    // Create a visited matrix for DFS
    const visited = new Array(n).fill(0).map(() => new Array(n).fill(false))

    // If path exists at midTime, search lower times
    if (dfs(0, 0, visited, midTime)) maxTime = midTime
    // Otherwise, search higher times
    else minTime = midTime + 1
  }

  // Return the minimum time found
  return minTime
}
