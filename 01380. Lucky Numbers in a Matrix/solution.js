/**
 * Problem: 1380. Lucky Numbers in a Matrix
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds lucky numbers that are minimum in their row and maximum in their column
 *
 * @param {number[][]} matrix - Input 2D matrix
 *
 * @returns {number[]} Array containing lucky numbers
 */
const luckyNumbers = (matrix) => {
  // Array to store lucky numbers found
  const luckyNumbersList = []

  // Iterate through each row in the matrix
  for (const currentRow of matrix) {
    // Find the minimum value in the current row
    const rowMinimum = Math.min(...currentRow)
    // Find the column index where the minimum value is located
    const minColumnIndex = currentRow.indexOf(rowMinimum)

    // Flag to track if current minimum is also maximum in its column
    let isLuckyNumber = true

    // Check if the found minimum is the maximum in its column
    for (const checkRow of matrix) {
      // If any element in this column is greater than rowMinimum, it's not lucky
      if (checkRow[minColumnIndex] > rowMinimum) {
        isLuckyNumber = false
        break
      }
    }

    // If the number passes both conditions, add it to result
    if (isLuckyNumber) luckyNumbersList.push(rowMinimum)
  }

  // Return the list of lucky numbers found
  return luckyNumbersList
}
