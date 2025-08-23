/**
 * Problem: 3197. Find the Minimum Area to Cover All Ones II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 122 ms (Beats 100%)
 */

/**
 * Finds the minimum total area of 3 rectangles covering all '1's in the grid
 *
 * @param {number[][]} grid - 2D array of 0s and 1s
 *
 * @returns {number} - Minimum sum of areas for 3 rectangles
 */
const minimumSum = (grid) => {
  // Memoization map to store computed results for subproblems
  const memo = new Map()

  // Recursively computes the minimum sum of areas for k rectangles
  const getRectangleArea = (rowStart, colStart, rowEnd, colEnd) => {
    // Initialize min/max coordinates for rows and columns
    let minRow = Infinity,
      maxRow = -Infinity,
      minCol = Infinity,
      maxCol = -Infinity

    // Iterate through the subgrid to find bounds of '1's
    for (let i = rowStart; i <= rowEnd; i++) {
      for (let j = colStart; j <= colEnd; j++) {
        if (grid[i][j] === 1) {
          minRow = Math.min(minRow, i)
          maxRow = Math.max(maxRow, i)
          minCol = Math.min(minCol, j)
          maxCol = Math.max(maxCol, j)
        }
      }
    }

    // If no '1' found, area is zero
    if (minRow === Infinity) return 0

    // Return area of the rectangle covering all '1's
    return (maxRow - minRow + 1) * (maxCol - minCol + 1)
  }

  // Recursively computes the minimum sum of areas for k rectangles
  const getMinAreaSum = (rowStart, colStart, rowEnd, colEnd, k) => {
    // Create a unique key for memoization
    const key = [rowStart, colStart, rowEnd, colEnd, k].join()

    // Return cached result if available
    if (memo.has(key)) return memo.get(key)

    // Initialize output to Infinity for minimization
    let minSum = Infinity

    // Base case: only one rectangle needed
    if (k === 1) minSum = getRectangleArea(rowStart, colStart, rowEnd, colEnd)
    // Case for two rectangles: try all possible horizontal and vertical splits
    else if (k === 2) {
      for (let i = rowStart; i < rowEnd; i++)
        minSum = Math.min(
          minSum,
          getMinAreaSum(rowStart, colStart, i, colEnd, 1) +
            getMinAreaSum(i + 1, colStart, rowEnd, colEnd, 1)
        )

      for (let j = colStart; j < colEnd; j++)
        minSum = Math.min(
          minSum,
          getMinAreaSum(rowStart, colStart, rowEnd, j, 1) +
            getMinAreaSum(rowStart, j + 1, rowEnd, colEnd, 1)
        )
    }
    // Case for three rectangles: try all possible splits and combinations
    else if (k === 3) {
      for (let i = rowStart; i < rowEnd; i++) {
        minSum = Math.min(
          minSum,
          getMinAreaSum(rowStart, colStart, i, colEnd, 1) +
            getMinAreaSum(i + 1, colStart, rowEnd, colEnd, 2)
        )

        minSum = Math.min(
          minSum,
          getMinAreaSum(rowStart, colStart, i, colEnd, 2) +
            getMinAreaSum(i + 1, colStart, rowEnd, colEnd, 1)
        )
      }

      for (let j = colStart; j < colEnd; j++) {
        minSum = Math.min(
          minSum,
          getMinAreaSum(rowStart, colStart, rowEnd, j, 1) +
            getMinAreaSum(rowStart, j + 1, rowEnd, colEnd, 2)
        )

        minSum = Math.min(
          minSum,
          getMinAreaSum(rowStart, colStart, rowEnd, j, 2) +
            getMinAreaSum(rowStart, j + 1, rowEnd, colEnd, 1)
        )
      }
    }

    // Store computed result in memoization map
    memo.set(key, minSum)

    return minSum
  }

  // Get grid dimensions
  const rowCount = grid.length,
    colCount = grid[0].length

  // Compute the answer for the whole grid with 3 rectangles
  const result = getMinAreaSum(0, 0, rowCount - 1, colCount - 1, 3)

  // Return the minimum sum of areas
  return result
}
