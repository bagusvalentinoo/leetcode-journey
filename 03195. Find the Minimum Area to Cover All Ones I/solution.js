/**
 * Problem: 3195. Find the Minimum Area to Cover All Ones I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 76 ms (Beats 100%)
 */

// Identity function: returns the input value as is
const id = (x) => x

// Checks if any element in the array is truthy (used to find rows containing 1)
const any = (x) => x.some(id)

/**
 * Returns the area of the smallest rectangle covering all 1s in a 2D grid
 *
 * @param {number[][]} grid - 2D array of numbers
 *
 * @returns {number} - Area of the rectangle
 */
const minimumArea = (grid) =>
  // Calculate the height: (last row index with 1 - first row index with 1) + 1
  (1 + grid.findLastIndex(any) - grid.findIndex(any)) *
  // Calculate the width:
  // Find all rows containing 1, then get the max lastIndexOf(1) and min indexOf(1) among them
  // (max column index with 1 - min column index with 1) + 1
  (1 +
    Math.max(...grid.filter(any).map((x) => x.lastIndexOf(1))) -
    Math.min(...grid.filter(any).map((x) => x.indexOf(1))))
