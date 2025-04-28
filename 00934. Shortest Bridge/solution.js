/**
 * Problem: 934. Shortest Bridge
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

// Initializes the direction for DFS traversal
const direction = [-1, 0, 1, 0, -1]

/**
 * Performs DFS to mark points and explore the grid
 *
 * @param {Array<[number, number]>} points - Stores coordinates to process
 * @param {number[][]} grid - Binary grid
 * @param {number} i - Current row index
 * @param {number} j - Current column index
 *
 * @returns {void}
 */
const dfs = (points, grid, i, j) => {
  //
  const m = grid.length,
    n = grid[0].length

  // Check if out of bounds or already visited
  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 2) return
  // Check if the cell is water
  if (grid[i][j] === 0) {
    // Mark the cell as visited and add to points
    points.push([i, j])
    return
  }

  // Mark the cell as visited
  grid[i][j] = 2

  // Explore all four directions
  for (let k = 0; k < 4; k++)
    dfs(points, grid, i + direction[k], j + direction[k + 1])
}

/**
 * Returns the minimum flips to connect two islands in a grid
 *
 * @param {number[][]} grid - Binary matrix representing the grid
 *
 * @returns {number} - Minimum flips required
 */
const shortestBridge = (grid) => {
  // Intialize the grid dimensions and points array
  const m = grid.length,
    n = grid[0].length,
    points = []

  // Initialize a flag to track if the first island is found
  let flipped = false

  // Iterate through the grid to find the first island
  for (let i = 0; i < m; i++) {
    // If the first island is found, break the loop
    if (flipped) break

    // Iterate through the grid to find the first island
    for (let j = 0; j < n; j++) {
      // If the first island is found, mark it and break the loop
      if (grid[i][j] === 1) {
        dfs(points, grid, i, j)
        flipped = true
        break
      }
    }
  }

  // Initialize the level of flips
  let level = 0

  // Perform BFS to find the minimum flips
  while (points.length > 0) {
    level++ // Add a level to the BFS

    // Store the current points to process
    const pointCurrent = points.length

    // Process each point in the current level
    for (let i = 0; i < pointCurrent; i++) {
      // Get the current point
      const [r, c] = points.shift()
      // Set the current cell
      grid[r][c] = 2

      // Explore all four directions
      for (let k = 0; k < 4; k++) {
        // Get the next cell in the direction
        const x = r + direction[k],
          y = c + direction[k + 1]

        // Check if the next cell is within bounds
        if (x >= 0 && x < m && y >= 0 && y < n) {
          // Check if the next cell is already visited or is the second island
          if (grid[x][y] === 2) continue
          // Check if the next cell is the second island
          if (grid[x][y] === 1) return level

          // Mark the next cell as visited and add to points
          grid[x][y] = 2
          points.push([x, y])
        }
      }
    }
  }

  // Return the level of flips
  return level
}
