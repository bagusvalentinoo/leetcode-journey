/**
 * Problem: 1380. Lucky Numbers in a Matrix
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds lucky numbers that are minimum in their row and maximum in their column
 *
 * @param matrix - Input 2D matrix
 *
 * @returns Array containing lucky numbers
 */
const luckyNumbers = (matrix: number[][]): number[] => {
  // Array to store lucky numbers found
  const luckyNumbersList: number[] = []

  // Iterate through each row in the matrix
  for (const currentRow of matrix) {
    // Find the minimum value in the current row
    const rowMinimum: number = Math.min(...currentRow)

    // Find the column index where the minimum value is located
    const minColumnIndex: number = currentRow.indexOf(rowMinimum)

    // Flag to track if current minimum is also maximum in its column
    let isLuckyNumber: boolean = true

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
