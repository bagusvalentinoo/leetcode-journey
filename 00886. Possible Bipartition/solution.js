/**
 * Problem: 886. Possible Bipartition
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

/**
 * Checks if the graph is bipartite
 *
 * @param {number} n - Number of nodes
 * @param {number[][]} dislikes - List of dislikes
 *
 * @returns {boolean} - True if the graph is bipartite, false otherwise
 */
const possibleBipartition = (n, dislikes) => {
  const map = new Uint16Array(n + 1).fill(2047) // 2047 is a placeholder value
  let counter = 0 // Counter for new colors
  const len = dislikes.length // Number of dislikes

  // Process each dislike
  for (let i = 0; i < len; i++) {
    // Get colors of current nodes
    const a = map[dislikes[i][0]],
      b = map[dislikes[i][1]]

    // Get next colors
    const ap = a + (a % 2 ? -1 : 1),
      bp = b + (b % 2 ? -1 : 1)

    // If both nodes are uncolored
    if (a === 2047) {
      // If both nodes are uncolored
      if (b === 2047) {
        map[dislikes[i][0]] = counter++
        map[dislikes[i][1]] = counter++
      } else {
        // If one node is uncolored
        map[dislikes[i][0]] = bp
      }
    } else if (b === 2047) {
      // If one node is uncolored
      map[dislikes[i][1]] = ap
    } else {
      // If both nodes are colored
      if (a === b) return false

      // If colors are the same
      if (a === bp) continue

      // Recolor all nodes
      for (let j = 1; j <= n; j++)
        map[j] === b ? (map[j] = ap) : map[j] === bp ? (map[j] = a) : null
    }
  }

  // Return true if the graph is bipartite
  return true
}
