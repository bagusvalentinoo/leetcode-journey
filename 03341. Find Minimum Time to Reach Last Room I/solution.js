/**
 * Problem: 3341. Find Minimum Time to Reach Last Room I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 72 ms (Beats 100%)
 */

/**
 * Calculates minimum time to reach the bottom-right cell
 *
 * @param {number[][]} moveTime - Grid where each cell contains a time value
 *
 * @returns {number} - Minimum time required
 */
const minTimeToReach = (moveTime) => {
  // Get grid dimensions
  const rows = moveTime.length
  const cols = moveTime[0].length
  // Define possible movement directions (right, left, down, up)
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]

  // Helper function to check if coordinates are within bounds
  const inBounds = (r, c) => r >= 0 && c >= 0 && r < rows && c < cols

  // Initialize matrix with Infinity values to track minimum times
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(Infinity))
  // Queue starting with [row, column, time] at top-left position
  let queue = [[0, 0, 0]]

  // BFS implementation to find minimum times
  while (queue.length) {
    // Temporary queue for next iteration
    const temp = []

    // Process all cells at current time level
    while (queue.length) {
      const [r, c, t] = queue.pop()

      // Skip if we already found a faster path to this cell
      if (matrix[r][c] <= t) continue

      // Update minimum time to reach this cell
      matrix[r][c] = t

      // Check all four directions
      for (const dir of dirs) {
        const ar = r + dir[0]
        const ac = c + dir[1]

        // Skip if out of bounds
        if (!inBounds(ar, ac)) continue
        // Skip if we already found a faster path
        if (matrix[ar][ac] <= t + 1) continue

        // Calculate arrival time (max of current time and cell's own time, plus 1)
        const at = (moveTime[ar][ac] >= t ? moveTime[ar][ac] : t) + 1

        // Add to next iteration queue
        temp.push([ar, ac, at])
      }
    }

    // Update queue for next iteration
    queue = temp
  }

  // Return minimum time to reach bottom-right cell
  return matrix[rows - 1][cols - 1]
}
