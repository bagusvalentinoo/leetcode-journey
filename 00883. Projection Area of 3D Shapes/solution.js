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
 * @returns {number} Total projection area
 */
const projectionArea = (grid) => {
  // Initialize sums for top, front, and side projections
  let topArea = 0,
    frontArea = 0,
    sideArea = 0

  // Get grid size (n x n)
  const size = grid.length

  // Iterate through each cell in the grid
  for (let i = 0; i < size; i++) {
    // Track maximum heights for front and side projections
    let maxFront = 0,
      maxSide = 0

    // Process each column in current row
    for (let j = 0; j < size; j++) {
      // Top projection: count non-zero cells
      topArea += grid[i][j] > 0 ? 1 : 0

      // Front projection: maximum height in column j
      maxFront = Math.max(maxFront, grid[j][i])
      // Side projection: maximum height in row i
      maxSide = Math.max(maxSide, grid[i][j])
    }

    // Add column and row maximums to front and side areas
    frontArea += maxFront
    sideArea += maxSide
  }

  // Return total projection area (sum of all three projections)
  return topArea + frontArea + sideArea
}
