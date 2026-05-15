/**
 * Problem: 3417. Zigzag Grid Traversal With Skip
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Zigzag traversal collecting elements where i+j is even
 *
 * @param grid - Input grid
 *
 * @returns Collected elements
 */
const zigzagTraversal = (grid: number[][]): number[] => {
  // Array to store collected elements
  const result = []

  // Iterate through each row in the grid
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    // Temporary array to hold elements for current row
    const currentRowElements = []

    // Process each column in current row
    for (let colIndex = 0; colIndex < grid[0].length; colIndex++) {
      // If row index is odd and column index is odd (i+j is even)
      if (rowIndex % 2 && colIndex % 2)
        // Add to front for zigzag order
        currentRowElements.unshift(grid[rowIndex][colIndex])
      // If both row and column indices are even (i+j is even)
      else if (rowIndex % 2 === 0 && colIndex % 2 === 0)
        // Add to back for zigzag order
        currentRowElements.push(grid[rowIndex][colIndex])
    }

    // Add collected elements from current row to result
    result.push(...currentRowElements)
  }

  // Return the final result
  return result
}
