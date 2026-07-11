/**
 * Problem: 3898. Find the Degree of Each Vertex
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the sum of each row in a matrix
 *
 * @param {number[][]} matrix - Input 2D matrix
 *
 * @returns {number[]} Array of row sums
 */
const findDegrees = (matrix) => {
  // Initialize result array with length equal to number of rows
  const result = new Array(matrix.length).fill(0)

  // Iterate through each row in the matrix
  for (let i = 0; i < matrix.length; i++) {
    // Iterate through each element in the current row
    for (let j = 0; j < matrix[i].length; j++)
      // Add current element to the row sum
      result[i] += matrix[i][j]
  }

  // Return array containing sums of each row
  return result
}
