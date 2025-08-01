/**
 * Problem: 118. Pascal's Triangle
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the next row of Pascal's Triangle
 *
 * @param {number} rowNum - Row index (1-based)
 * @param {number[]} rowBefore - Previous row
 *
 * @returns {number[]} - Next row
 */

const sumNums = (rowNum, rowBefore) => {
  // Initialize the next row with the first element as 1 (Pascal's Triangle property)
  const nextRow = [1]

  // Loop through the previous row to calculate the inner elements of the next row
  // Each element is the sum of two adjacent elements from the previous row
  for (let i = 1; i < rowNum - 1; i++)
    nextRow.push(rowBefore[i - 1] + rowBefore[i])

  // Add the last element as 1 (Pascal's Triangle property)
  nextRow.push(1)

  // Return the constructed next row
  return nextRow
}

/**
 * Generates Pascal's Triangle up to `numRows`
 *
 * @param {number} numRows - Number of rows
 *
 * @returns {number[][]} - Pascal's Triangle as a 2D array
 */
const generate = (numRows) => {
  // If only one row is requested, return the first row of Pascal's Triangle
  if (numRows === 1) return [[1]]

  // If two rows are requested, return the first two rows of Pascal's Triangle
  if (numRows === 2) return [[1], [1, 1]]

  // Initialize the triangle with the first two rows
  const pascalTriangle = [[1], [1, 1]]

  // Generate each subsequent row of Pascal's Triangle
  for (let rowIndex = 2; rowIndex < numRows; rowIndex++) {
    // Compute the next row using the previous row
    const nextRow = sumNums(rowIndex + 1, pascalTriangle[rowIndex - 1])

    // Add the computed row to the triangle
    pascalTriangle.push(nextRow)
  }

  // Return the complete Pascal's Triangle
  return pascalTriangle
}
