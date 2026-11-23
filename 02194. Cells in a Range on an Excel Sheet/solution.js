/**
 * Problem: 2194. Cells in a Range on an Excel Sheet
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Generate every cell in the specified Excel range
 *
 * @param {string} s - Excel cell range
 *
 * @returns {string[]} Cells ordered by column and row
 */
const cellsInRange = (s) => {
  // Extract the starting and ending columns and rows
  const [startColumn, startRow, endColumn, endRow] = [s[0], s[1], s[3], s[4]]

  // Store each cell in column-major order
  const cells = []

  // Visit each column in the range
  for (
    let column = startColumn.charCodeAt(0);
    column <= endColumn.charCodeAt(0);
    column++
  ) {
    // Visit each row in the current column
    for (let row = startRow; row <= endRow; row++)
      cells.push(`${String.fromCharCode(column)}${row}`)
  }

  // Return all cells in the required order
  return cells
}
