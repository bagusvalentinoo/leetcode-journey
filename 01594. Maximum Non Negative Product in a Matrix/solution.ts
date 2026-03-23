/**
 * Problem: 1594. Maximum Non Negative Product in a Matrix
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds maximum product path from top-left to bottom-right
 *
 * @param grid - Input grid
 *
 * @returns Max product mod 1e9+7 or -1 if negative
 */
const maxProductPath = (grid: number[][]): number => {
  const MOD = 1000000007

  const rows = grid.length,
    cols = grid[0].length

  // DP arrays for max and min products
  const maxProduct: number[][] = new Array(rows)
      .fill(0)
      .map(() => new Array(cols).fill(0)),
    minProduct: number[][] = new Array(rows)
      .fill(0)
      .map(() => new Array(cols).fill(0))

  // Initialize starting cell
  maxProduct[0][0] = minProduct[0][0] = grid[0][0]

  // Initialize first row (can only come from left)
  for (let col = 1; col < cols; col++)
    maxProduct[0][col] = minProduct[0][col] =
      maxProduct[0][col - 1] * grid[0][col]

  // Initialize first column (can only come from top)
  for (let row = 1; row < rows; row++)
    maxProduct[row][0] = minProduct[row][0] =
      maxProduct[row - 1][0] * grid[row][0]

  // Fill remaining cells
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      // If current cell is non-negative, max comes from larger previous max
      if (grid[row][col] >= 0) {
        // If current cell is non-negative, multiplying preserves order
        // Maximum comes from the larger of the two previous max values
        maxProduct[row][col] =
          Math.max(maxProduct[row][col - 1], maxProduct[row - 1][col]) *
          grid[row][col]

        // Minimum comes from the smaller of the two previous min values
        minProduct[row][col] =
          Math.min(minProduct[row][col - 1], minProduct[row - 1][col]) *
          grid[row][col]
      }
      // If current cell is negative, max comes from smaller previous min (negative * negative = positive)
      else {
        // If current cell is negative, multiplying flips order
        // Maximum comes from the smaller of the two previous min values (negative * negative = positive)
        maxProduct[row][col] =
          Math.min(minProduct[row][col - 1], minProduct[row - 1][col]) *
          grid[row][col]
        // Minimum comes from the larger of the two previous max values (positive * negative = negative)
        minProduct[row][col] =
          Math.max(maxProduct[row][col - 1], maxProduct[row - 1][col]) *
          grid[row][col]
      }
    }
  }

  // If max product is negative, return -1
  if (maxProduct[rows - 1][cols - 1] < 0) return -1

  // Return max product modulo MOD
  return maxProduct[rows - 1][cols - 1] % MOD
}
