/**
 * Problem: 498. Diagonal Traverse
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns all elements of the matrix in diagonal order
 *
 * @param  {number[][]} mat - Input matrix
 *
 * @returns {number[]} - Elements in diagonal order
 */
const findDiagonalOrder = (mat) => {
  // Check if the input matrix is null or empty, return empty array if true
  if (mat === null || mat.length === 0) return []

  // Initialize the result array to store elements in diagonal order
  const result = []
  // Get the number of rows in the matrix
  const rowCount = mat.length
  // Get the number of columns in the matrix
  const colCount = mat[0].length

  // Direction variable: 1 for upward, -1 for downward traversal
  let direction = 1
  // Index to track the position in the result array
  let resultIndex = 0
  // Initialize current row and column pointers
  let currentRow = 0,
    currentCol = 0

  // Loop until all elements are traversed
  while (resultIndex <= rowCount * colCount - 1) {
    // Assign the current matrix element to the result array
    result[resultIndex] = mat[currentRow][currentCol]

    // If traversing upward
    if (direction === 1) {
      // If at the last column, change direction to downward and move to next row
      if (currentCol === colCount - 1) {
        direction = -1
        currentRow++
        // If at the first row, change direction to downward and move to next column
      } else if (currentRow === 0) {
        direction = -1
        currentCol++
        // Otherwise, move up diagonally
      } else {
        currentRow--
        currentCol++
      }
      // If traversing downward
    } else {
      // If at the last row, change direction to upward and move to next column
      if (currentRow === rowCount - 1) {
        direction = 1
        currentCol++
        // If at the first column, change direction to upward and move to next row
      } else if (currentCol === 0) {
        direction = 1
        currentRow++
        // Otherwise, move down diagonally
      } else {
        currentRow++
        currentCol--
      }
    }

    // Move to the next index in the result array
    resultIndex++
  }

  // Return the result array containing elements in diagonal order
  return result
}
