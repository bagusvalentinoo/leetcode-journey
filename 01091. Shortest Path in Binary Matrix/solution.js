/**
 * Problem: 1091. Shortest Path in Binary Matrix
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 12 ms (Beats 100%)
 */

/**
 * Finds shortest path from top-left to bottom-right in a binary matrix
 *
 * @param {number[][]} grid - 2D binary matrix
 *
 * @returns {number} - Path length or -1
 */
const shortestPathBinaryMatrix = (grid) => {
  // Get the last index of the grid (assuming square matrix)
  const n = grid.length - 1

  // If start or end cell is blocked, return -1 (no path possible)
  if (grid[0][0] === 1 || grid[n][n] === 1) return -1

  // If grid is 1x1 or 2x2, return the direct path length
  if (n < 2) return n + 1

  // Initialize queue for BFS traversal
  const queue = []

  // Start BFS from top-left cell with distance 1
  queue.push({ x: 0, y: 0, d: 1 })

  // Loop until queue is empty
  while (queue.length > 0) {
    // Dequeue the first element in the queue
    const curr = queue.splice(0, 1)[0]

    // Explore all 8 possible directions (including diagonals)
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        // Calculate new cell coordinates
        const x = curr.x + i,
          y = curr.y + j

        // If reached bottom-right cell, return path length
        if (x === n && y === n) return curr.d + 1

        // Check if new cell is valid, not visited, and open (0)
        if (
          (i !== 0 || j !== 0) && // Skip current cell
          x >= 0 &&
          x <= n &&
          y >= 0 &&
          y <= n &&
          grid[x][y] === 0
        ) {
          // Mark cell as visited by setting to 1
          grid[x][y] = 1

          // Add new cell to queue with incremented distance
          queue.push({ x: x, y: y, d: curr.d + 1 })
        }
      }
    }
  }

  // If no path found, return -1
  return -1
}
