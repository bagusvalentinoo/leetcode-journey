/**
 * Problem: 3342. Find Minimum Time to Reach Last Room II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 553 ms (Beats 100%)
 */

/**
 * Calculates minimum time to reach bottom-right cell in grid
 *
 * @param {number[][]} moveTime - Grid of entry time requirements
 *
 * @returns {number} Minimum time required
 */
const minTimeToReach = (moveTime) => {
  // Get dimensions of the grid
  const n = moveTime.length,
    m = moveTime[0].length
  // Initialize distance array with Infinity
  const d = Array.from({ length: n }, () => Array(m).fill(Infinity))
  // Track visited cells
  const v = Array.from({ length: n }, () => Array(m).fill(false))
  // Define four directions: right, left, down, up
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  // Priority queue for Dijkstra's algorithm
  const q = new PriorityQueue((a, b) => (a.dist < b.dist ? -1 : 1))

  // Starting position has zero distance
  d[0][0] = 0
  q.enqueue({ x: 0, y: 0, dist: 0 })

  // Dijkstra's algorithm main loop
  while (!q.isEmpty()) {
    const s = q.dequeue()

    // Skip already visited cells
    if (v[s.x][s.y]) continue
    // Stop if we've reached the bottom-right cell
    if (s.x === n - 1 && s.y === m - 1) break

    // Mark current cell as visited
    v[s.x][s.y] = 1

    // Try moving in all four directions
    for (let i = 0; i < 4; i++) {
      const nx = s.x + dirs[i][0]
      const ny = s.y + dirs[i][1]

      // Skip out-of-bounds cells
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue

      // Calculate new distance with entry time and parity cost
      const dist =
        Math.max(d[s.x][s.y], moveTime[nx][ny]) + ((s.x + s.y) % 2) + 1

      // Update distance if shorter path found
      if (d[nx][ny] > dist) {
        d[nx][ny] = dist
        q.enqueue({ x: nx, y: ny, dist: dist })
      }
    }
  }

  // Return minimum time to reach the destination
  return d[n - 1][m - 1]
}
