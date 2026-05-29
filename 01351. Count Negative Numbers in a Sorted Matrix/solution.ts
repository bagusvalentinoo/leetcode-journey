/**
 * Problem: 1351. Count Negative Numbers in a Sorted Matrix
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts negative numbers in a row-wise and column-wise sorted matrix
 *
 * @param grid - Sorted matrix (rows and columns decreasing)
 *
 * @returns Total count of negative numbers
 */
const countNegatives = (grid: number[][]): number => {
  // Get grid dimensions
  const rows: number = grid.length,
    cols: number = grid[0].length

  // Pointer for current row
  let currentRow: number = 0

  // Pointer for current column (start from last column)
  let currentCol: number = cols - 1

  // Counter for negative numbers
  let negativeCount: number = 0

  // Traverse grid from top-right corner to bottom-left
  while (currentRow < rows && currentCol >= 0) {
    // If current element is negative
    if (grid[currentRow][currentCol] < 0) {
      // All elements below in this column are also negative
      negativeCount += rows - currentRow
      // Move left to previous column
      currentCol--
    }
    // If current element is non-negative, move down to next row
    else currentRow++
  }

  // Return total count of negative numbers
  return negativeCount
}
