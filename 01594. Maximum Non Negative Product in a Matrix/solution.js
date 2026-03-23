/**
 * Problem: 1594. Maximum Non Negative Product in a Matrix
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Finds maximum product path from top-left to bottom-right
 *
 * @param {number[][]} grid - Input grid
 *
 * @returns {number} Max product mod 1e9+7 or -1 if negative
 */
const maxProductPath = (grid) => {
  // Modulo constant for result
  const MOD = 1e9 + 7

  // Get grid dimensions
  const rows = grid.length,
    cols = grid[0].length

  // DP arrays to track max and min products at each cell
  // Track both because negative numbers can flip min to max
  const maxProduct = Array.from({ length: rows }, () => Array(cols).fill(0)),
    minProduct = Array.from({ length: rows }, () => Array(cols).fill(0))

  // Initialize starting cell
  maxProduct[0][0] = minProduct[0][0] = grid[0][0]

  // Fill DP table row by row
  for (let row = 0; row < rows; row++) {
    // Process each column in current row
    for (let col = 0; col < cols; col++) {
      // Skip starting cell
      if (row === 0 && col === 0) continue

      // Collect all possible products from previous cells
      const candidates = []

      // From top cell (if exists)
      if (row > 0) {
        candidates.push(maxProduct[row - 1][col] * grid[row][col])
        candidates.push(minProduct[row - 1][col] * grid[row][col])
      }
      // From left cell (if exists)
      if (col > 0) {
        candidates.push(maxProduct[row][col - 1] * grid[row][col])
        candidates.push(minProduct[row][col - 1] * grid[row][col])
      }

      // Take max and min from all candidates
      maxProduct[row][col] = Math.max(...candidates)
      minProduct[row][col] = Math.min(...candidates)
    }
  }

  // Get final product at bottom-right corner
  const finalProduct = maxProduct[rows - 1][cols - 1]

  // Return result modulo MOD if positive, otherwise -1
  return finalProduct >= 0 ? finalProduct % MOD : -1
}
