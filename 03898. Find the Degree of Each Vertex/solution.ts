/**
 * Problem: 3898. Find the Degree of Each Vertex
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the sum of each row in a matrix
 *
 * @param matrix - Input 2D matrix
 *
 * @returns Array of row sums
 */
const findDegrees = (matrix: number[][]): number[] => {
  // Initialize array to store row sums
  const rowSums: number[] = []

  // Iterate through each row in the matrix
  for (let i: number = 0; i < matrix.length; i++) {
    // Initialize sum for current row
    let currentRowSum: number = 0

    // Iterate through each element in the current row
    for (let j: number = 0; j < matrix[i].length; j++)
      // Add current element to row sum
      currentRowSum += matrix[i][j]

    // Push row sum to result array
    rowSums.push(currentRowSum)
  }

  // Return array of row sums
  return rowSums
}
