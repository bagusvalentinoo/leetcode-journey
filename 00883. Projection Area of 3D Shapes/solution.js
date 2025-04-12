/**
 * Problem: 883. Projection Area of 3D Shapes
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Computes total projection area of a 3D shape in a grid
 *
 * @param {number[][]} grid - n x n grid of cube heights
 *
 * @returns {number} - Total projection area
 */
const projectionArea = (grid) => {
  // Initialize variables
  let top = 0,
    front = 0,
    side = 0
  const m = grid.length

  // Compute projections
  for (let i = 0; i < m; i++) {
    // Compute row maximums
    let maxFront = 0,
      maxSide = 0

    // Compute column maximums
    for (let j = 0; j < m; j++) {
      // Top projection: Count non-zero cells
      top += grid[i][j] > 0 ? 1 : 0
      // Front projection: Track row maximum
      maxFront = Math.max(maxFront, grid[j][i])
      // Side projection: Track column maximum
      maxSide = Math.max(maxSide, grid[i][j])
    }

    // Add row maximums to front and side projections
    front += maxFront
    side += maxSide
  }

  // Return total projection area
  return top + front + side
}
