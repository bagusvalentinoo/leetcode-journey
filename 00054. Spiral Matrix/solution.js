/**
 * Problem: 54. Spiral Matrix
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns elements of matrix in spiral order
 *
 * @param {number[][]} matrix - Input matrix
 *
 * @returns {number[]} Spiral order traversal
 */
const spiralOrder = (matrix) => {
  // Array to store spiral order elements
  const result = []

  // Initialize top and bottom row boundaries
  let top = 0,
    bottom = matrix.length - 1

  // Initialize left and right column boundaries
  let left = 0,
    right = matrix[0].length - 1

  // Continue while boundaries haven't crossed
  while (top <= bottom && left <= right) {
    // Traverse top row from left to right
    for (let i = left; i <= right; i++) result.push(matrix[top][i])

    // Move top boundary down
    top++

    // Traverse right column from top to bottom
    for (let i = top; i <= bottom; i++) result.push(matrix[i][right])

    // Move right boundary left
    right--

    // Check if there are rows remaining
    if (top <= bottom) {
      // Traverse bottom row from right to left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
    }

    // Move bottom boundary up
    bottom--

    // Check if there are columns remaining
    if (left <= right) {
      // Traverse left column from bottom to top
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
    }

    // Move left boundary right
    left++
  }

  // Return spiral order traversal
  return result
}
