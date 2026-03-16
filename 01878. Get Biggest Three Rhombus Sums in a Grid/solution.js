/**
 * Problem: 1878. Get Biggest Three Rhombus Sums in a Grid
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 21 ms (Beats 100%)
 */

/**
 * Finds the three largest distinct rhombus sums in a grid
 *
 * @param {number[][]} grid - Input matrix
 *
 * @returns {number[]} Three largest distinct sums (sorted descending)
 */
const getBiggestThree = (grid) => {
  // Get grid dimensions
  const rows = grid.length,
    cols = grid[0].length

  // Array to store top 3 largest distinct sums
  const topSums = [0, 0, 0]

  // Helper function to insert value into topSums if it's among top 3 distinct values
  const insertIntoTops = (value) => {
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
  for (let centerRow = 0; centerRow < rows; ++centerRow) {
    for (let centerCol = 0; centerCol < cols; ++centerCol) {
      // Add single cell (rhombus of size 1)
      insertIntoTops(grid[centerRow][centerCol])

      // Maximum possible rhombus size from this center
      const maxRhombusSize = Math.min(
        centerRow, // Distance to top edge
        rows - 1 - centerRow, // Distance to bottom edge
        centerCol, // Distance to left edge
        cols - 1 - centerCol // Distance to right edge
      )

      // Try all possible rhombus sizes from this center
      for (let size = 1; size <= maxRhombusSize; ++size) {
        // Accumulator for current rhombus sum
        let rhombusSum = 0

        // Walk around the four sides of the rhombus
        for (let step = 0; step < size; ++step) {
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
