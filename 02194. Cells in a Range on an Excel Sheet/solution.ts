/**
 * Problem: 2194. Cells in a Range on an Excel Sheet
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Generate every cell in the specified Excel range
 *
 * @param s - Excel cell range
 *
 * @returns Cells ordered by column and row
 */
const cellsInRange = (s: string): string[] => {
  // Extract the starting and ending columns and rows
  const [startColumn, startRow, endColumn, endRow]: string[] = [
    s[0],
    s[1],
    s[3],
    s[4]
  ]

  // Store each cell in column-major order
  const cells: string[] = []

  // Visit each column in the range
  for (
    let column: number = startColumn.charCodeAt(0);
    column <= endColumn.charCodeAt(0);
    column++
  ) {
    // Visit each row in the current column
    for (
      let row: number = startRow.charCodeAt(0);
      row <= endRow.charCodeAt(0);
      row++
    )
      cells.push(`${String.fromCharCode(column)}${String.fromCharCode(row)}`)
  }

  // Return all cells in the required order
  return cells
}
