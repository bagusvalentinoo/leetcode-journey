/**
 * Problem: 54. Spiral Matrix
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns elements of matrix in spiral order
 *
 * @param matrix - Input matrix
 *
 * @returns Spiral order traversal
 */
const spiralOrder = (matrix: number[][]): number[] => {
  // Array to store spiral order elements
  const result: number[] = []

  // Initialize top and bottom row boundaries
  let top: number = 0,
    bottom: number = matrix.length - 1

  // Initialize left and right column boundaries
  let left: number = 0,
    right: number = matrix[0].length - 1

  // Continue while boundaries haven't crossed
  while (top <= bottom && left <= right) {
    // Traverse top row from left to right
    for (let i: number = left; i <= right; i++) result.push(matrix[top][i])

    // Move top boundary down
    top++

    // Traverse right column from top to bottom
    for (let i: number = top; i <= bottom; i++) result.push(matrix[i][right])

    // Move right boundary left
    right--

    // Check if there are rows remaining
    if (top <= bottom) {
      // Traverse bottom row from right to left
      for (let i: number = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
    }

    // Move bottom boundary up
    bottom--

    // Check if there are columns remaining
    if (left <= right) {
      // Traverse left column from bottom to top
      for (let i: number = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
    }

    // Move left boundary right
    left++
  }

  // Return spiral order traversal
  return result
}
