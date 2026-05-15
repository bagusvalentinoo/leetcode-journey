/**
 * Problem: 3417. Zigzag Grid Traversal With Skip
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Zigzag traversal collecting elements where i+j is even
 *
 * @param {number[][]} grid - Input grid
 *
 * @returns {number[]} Collected elements
 */
const zigzagTraversal = (grid) => {
  // Array to store collected elements
  const result = []

  // Iterate through each row in the grid
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    // If row index is even, traverse left to right
    if (rowIndex % 2 === 0) {
      // Iterate through columns from left to right
      for (let colIndex = 0; colIndex < grid[0].length; colIndex++) {
        // Add element if sum of indices is even
        if ((rowIndex + colIndex) % 2 === 0)
          result.push(grid[rowIndex][colIndex])
      }
    }
    // If row index is odd, traverse right to left
    else {
      // Iterate through columns from right to left
      for (let colIndex = grid[0].length - 1; colIndex >= 0; colIndex--) {
        // Add element if sum of indices is even
        if ((rowIndex + colIndex) % 2 === 0)
          result.push(grid[rowIndex][colIndex])
      }
    }
  }

  // Return the final result
  return result
}
