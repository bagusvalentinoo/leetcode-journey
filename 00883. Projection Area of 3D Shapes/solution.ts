/**
 * Problem: 883. Projection Area of 3D Shapes
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Computes total projection area of a 3D shape in a grid
 *
 * @param grid - n x n grid of cube heights
 *
 * @returns Total projection area
 */
const projectionArea = (grid: number[][]): number => {
  // Initialize total projection area
  let totalArea: number = 0

  // Get grid size (n x n)
  let gridSize: number = grid.length

  // Iterate through each row and column simultaneously
  for (let row = 0; row < gridSize; row++) {
    // Track maximum heights for current row and column
    let rowMax: number = 0,
      colMax: number = 0

    // Process each cell in current row and column
    for (let col = 0; col < gridSize; col++) {
      // Top projection: count non-zero cells
      if (grid[row][col] > 0) totalArea++

      // Side projection: maximum height in current row
      rowMax = Math.max(rowMax, grid[row][col])
      // Front projection: maximum height in current column
      colMax = Math.max(colMax, grid[col][row])
    }

    // Add row and column maximums to total area
    totalArea += rowMax + colMax
  }

  // Return total projection area
  return totalArea
}
