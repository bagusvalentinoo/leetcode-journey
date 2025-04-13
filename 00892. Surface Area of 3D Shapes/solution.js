/**
 * Problem: 892. Surface Area of 3D Shapes
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates total surface area of 3D shapes formed by cubes on a grid
 *
 * @param {number[][]} grid - Grid representing heights of cubes
 *
 * @returns {number} - Total surface area of resulting shapes
 */
const surfaceArea = (grid) => {
  // Get grid size
  const n = grid.length
  let totalArea = 0

  // Iterate over each cell in the grid
  for (let i = 0; i < n; i++) {
    // Iterate over each cell in the row
    for (let j = 0; j < n; j++) {
      // Only consider cells with height > 0
      if (grid[i][j] > 0) {
        // Add surface area for the current tower
        totalArea += 4 * grid[i][j] + 2

        // Subtract overlapping areas with adjacent towers
        if (i > 0) totalArea -= 2 * Math.min(grid[i][j], grid[i - 1][j]) // Up
        if (j > 0) totalArea -= 2 * Math.min(grid[i][j], grid[i][j - 1]) // Left
      }
    }
  }

  return totalArea
}
