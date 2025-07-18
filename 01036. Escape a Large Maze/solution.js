/**
 * Problem: 1036. Escape a Large Maze
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 25 ms (Beats 100%)
 */

/**
 * Checks if escape from source to target is possible in a grid with blocked cells
 *
 * @param {number[][]} blocked - Blocked cell coordinates [row, col]
 * @param {number[]} source - Starting position [row, col]
 * @param {number[]} target - Target position [row, col]
 *
 * @returns {boolean} - True if path exists, false otherwise
 */
const isEscapePossible = (blocked, source, target) => {
  // Define DFS function to explore reachable cells from a starting position
  const dfs = (r, c) => {
    // Stop if target found or explored enough cells to confirm no enclosure
    if (flag || seen.size === tgt) return
    // Stop if coordinates are out of bounds
    if (r < 0 || r === n || c < 0 || c === n) return
    // Check if current position matches target coordinates
    if (r === rr && c === cc) return (flag = true)

    // Create unique key for current position using row*n + col formula
    const key = n * r + c

    // Skip if cell already visited or blocked
    if (seen.has(key) || set.has(key)) return

    // Mark current cell as visited
    seen.add(key)

    // Recursively explore all 4 directions (up, down, left, right)
    dfs(r - 1, c)
    dfs(r + 1, c)
    dfs(r, c - 1)
    dfs(r, c + 1)
  }

  // Initialize blocked cells set and grid dimension
  const set = new Set(),
    n = 1000000

  // Convert blocked coordinates to unique keys and store in set
  blocked.forEach((e) => set.add(n * e[0] + e[1]))

  // Initialize tracking variables for DFS exploration
  let seen = new Set(),
    rr = target[0], // Target row coordinate
    flag // Flag to indicate if target is reachable

  // Calculate maximum cells that could be enclosed by blocked cells
  const tgt = (blocked.length ** 2) >> 1,
    cc = target[1] // Target column coordinate

  // Start DFS from source position
  dfs(...source)

  // If target was reached directly, return true
  if (flag) return true

  // If explored cells less than enclosure threshold, source is trapped
  if (seen.size < tgt)
    return false

    // Reset for second DFS from target, clear target coordinates
  ;(seen = new Set()), (rr = null)

  // Start DFS from target position
  dfs(...target)

  // Return true if target can explore enough cells (not trapped)
  return seen.size === tgt
}
