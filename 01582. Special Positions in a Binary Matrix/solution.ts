/**
 * Problem: 1582. Special Positions in a Binary Matrix
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts special positions in a binary matrix
 *
 * @param mat - Binary matrix
 *
 * @returns Number of special positions
 */
const numSpecial = (mat: number[][]): number => {
  // Initialize the count of special positions
  let specialCount: number = 0

  // Check each row for potential special positions
  for (let row: number = 0; row < mat.length; row++) {
    // Find the column index of the single 1 in the current row
    const columnIndex: number = findUniqueOneInRow(mat, row)

    // If row has exactly one 1 and that column has only that 1, count it
    if (columnIndex >= 0 && isColumnUnique(mat, row, columnIndex))
      specialCount++
  }

  // Return the count of special positions
  return specialCount
}

/**
 * Finds column index if row has exactly one 1, otherwise returns -1
 *
 * @param mat - Binary matrix
 * @param row - Row index to check
 *
 * @returns Column index of the single 1, or -1 if none or multiple
 */
const findUniqueOneInRow = (mat: number[][], row: number): number => {
  // Initialize the column index of the single 1 to -1
  let foundColumn: number = -1

  // Scan through columns in current row
  for (let col: number = 0; col < mat[0].length; col++) {
    // If a 1 is found in the current column
    if (mat[row][col] === 1) {
      // If already found a 1, this row has multiple 1s
      if (foundColumn >= 0) return -1

      // Store the column index of the first 1 found
      foundColumn = col
    }
  }

  // Return the column index of the single 1, or -1 if none or multiple
  return foundColumn
}

/**
 * Checks if a column has only one 1 (at the specified row)
 *
 * @param mat - Binary matrix
 * @param row - Row where the 1 is located
 * @param col - Column to check
 *
 * @returns True if column has only that one 1
 */
const isColumnUnique = (mat: number[][], row: number, col: number): boolean => {
  // Check all rows in this column
  for (let r: number = 0; r < mat.length; r++)
    // If another row has a 1 in this column, it's not unique
    if (mat[r][col] === 1 && r !== row) return false

  // If no other row has a 1 in this column, it's unique
  return true
}
