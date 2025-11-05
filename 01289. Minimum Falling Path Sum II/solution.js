/**
 * Problem: 1289. Minimum Falling Path Sum II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Finds the minimum falling path sum in a grid
 *
 * @param {number[][]} grid - 2D array of numbers
 *
 * @returns {number} - Minimum falling path sum
 */
const minFallingPathSum = (grid) => {
  // If the grid has only one row, return the single element as the result
  if (grid.length === 1) return grid[0][0]

  // Initialize variables to track the smallest and second smallest sums
  // from the previous row, and the position of the smallest sum
  let minFst = 0,
    minSnd = 0,
    fstPos = -1

  // Iterate through each row of the grid
  for (let i = 0; i < grid.length; i++) {
    // Initialize variables to track the smallest and second smallest sums
    // for the current row, and the position of the smallest sum
    let nextFst = Infinity,
      nextSnd = Infinity,
      nextPos = -1

    // Iterate through each column in the current row
    for (let j = 0; j < grid[0].length; j++) {
      // Calculate the value by adding the current cell value to the minimum
      // sum from the previous row, avoiding the column of the previous smallest
      const val = grid[i][j] + (j === fstPos ? minSnd : minFst)

      // Update the smallest and second smallest sums for the current row
      // if the current value is smaller than or equal to the smallest sum
      if (nextFst >= val) {
        nextSnd = nextFst
        nextFst = val
        nextPos = j
      }
      // Otherwise, update the second smallest sum if the current value is smaller
      else if (nextSnd > val) nextSnd = val
    }

    // Update the smallest and second smallest sums and their positions
    // for the next iteration
    minFst = nextFst
    minSnd = nextSnd
    fstPos = nextPos
  }

  // Return the smallest sum after processing all rows
  return minFst
}
