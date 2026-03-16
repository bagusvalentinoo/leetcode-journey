/**
 * Problem: 1878. Get Biggest Three Rhombus Sums in a Grid
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 18 ms (Beats 100%)
 */

/**
 * Finds the three largest distinct rhombus sums in a grid
 *
 * @param grid - Input matrix
 *
 * @returns Three largest distinct sums (sorted descending)
 */
const getBiggestThree = (grid: number[][]): number[] => {
  // Get grid dimensions
  const rows: number = grid.length,
    cols: number = grid[0].length

  // Array to store top 3 largest distinct sums
  const topSums: number[] = [0, 0, 0]

  // Helper function to insert value into topSums if it's among top 3 distinct values
  const insertIntoTops = (value: number): void => {
    // Skip if value already exists in topSums
    if (value === topSums[0] || value === topSums[1] || value === topSums[2])
      return

    // If value is larger than the largest, shift all down
    if (value > topSums[0]) {
      topSums[2] = topSums[1]
      topSums[1] = topSums[0]
      topSums[0] = value
    }
    // If value is larger than second largest, shift second down
    else if (value > topSums[1]) {
      topSums[2] = topSums[1]
      topSums[1] = value
    }
    // If value is larger than third largest, replace third
    else if (value > topSums[2]) topSums[2] = value
  }

  // Iterate through each cell as potential rhombus center
  for (let centerRow: number = 0; centerRow < rows; ++centerRow) {
    for (let centerCol: number = 0; centerCol < cols; ++centerCol) {
      // Add single cell (rhombus of size 1)
      insertIntoTops(grid[centerRow][centerCol])

      // Maximum possible rhombus size from this center
      const maxRhombusSize: number = Math.min(
        centerRow, // Distance to top edge
        rows - 1 - centerRow, // Distance to bottom edge
        centerCol, // Distance to left edge
        cols - 1 - centerCol // Distance to right edge
      )

      // Try all possible rhombus sizes from this center
      for (let size: number = 1; size <= maxRhombusSize; ++size) {
        // Accumulator for current rhombus sum
        let rhombusSum: number = 0

        // Walk around the four sides of the rhombus
        for (let step: number = 0; step < size; ++step) {
          // Top-right side
          rhombusSum += grid[centerRow - size + step][centerCol + step]
          // Right-bottom side
          rhombusSum += grid[centerRow + step][centerCol + size - step]
          // Bottom-left side
          rhombusSum += grid[centerRow + size - step][centerCol - step]
          // Left-top side
          rhombusSum += grid[centerRow - step][centerCol - size + step]
        }

        // Try to insert rhombus sum into top 3
        insertIntoTops(rhombusSum)
      }
    }
  }

  // Return only positive sums (filter out zeros)
  return topSums.filter((value) => value > 0)
}
