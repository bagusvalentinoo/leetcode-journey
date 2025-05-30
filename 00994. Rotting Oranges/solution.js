/**
 * Problem: 994. Rotting Oranges
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum time for all oranges to rot, or -1 if impossible
 *
 * @param {number[][]} grid - Grid of oranges (0=empty, 1=fresh, 2=rotten)
 *
 * @returns {number} - Minutes required or -1
 */
const orangesRotting = (grid) => {
  // Track count of fresh oranges
  let freshCount = 0

  // Get grid dimensions and initialize queue for BFS
  const rows = grid.length,
    cols = grid[0].length,
    rottenQueue = []

  // Find all rotten oranges and count fresh oranges
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++)
      if (grid[i][j] === 2) rottenQueue.push([i, j])
      else if (grid[i][j] === 1) freshCount++

  // No fresh oranges means no time needed
  if (freshCount === 0) return 0
  // No rotten oranges means impossible to rot all fresh oranges
  if (rottenQueue.length === 0) return -1

  // Helper function to check and convert fresh orange to rotten
  const rotOrange = (i, j) => {
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] !== 1)
      return false

    grid[i][j] = 2
    freshCount--

    return true
  }

  // Queue for next minute's oranges to process
  const nextMinuteQueue = []
  // Track elapsed time
  let minutes = 0

  // BFS to rot oranges level by level (by minute)
  while (rottenQueue.length > 0 || nextMinuteQueue.length > 0) {
    // If current minute queue is empty, move to next minute
    if (rottenQueue.length === 0 && nextMinuteQueue.length > 0) {
      minutes++

      // Move all oranges from next minute to current queue
      while (nextMinuteQueue.length > 0)
        rottenQueue.push(nextMinuteQueue.shift())
    }

    // Process current rotten orange
    if (rottenQueue.length > 0) {
      const [i, j] = rottenQueue.shift()

      // Check all 4 adjacent cells
      if (rotOrange(i + 1, j)) nextMinuteQueue.push([i + 1, j])
      if (rotOrange(i, j + 1)) nextMinuteQueue.push([i, j + 1])
      if (rotOrange(i - 1, j)) nextMinuteQueue.push([i - 1, j])
      if (rotOrange(i, j - 1)) nextMinuteQueue.push([i, j - 1])
    }
  }

  // Return minutes if all oranges rotted, otherwise -1
  return freshCount === 0 ? minutes : -1
}
