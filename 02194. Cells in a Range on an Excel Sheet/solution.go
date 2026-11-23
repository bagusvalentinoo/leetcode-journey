/**
 * Problem: 2194. Cells in a Range on an Excel Sheet
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func cellsInRange(s string) []string {
  // Extract the starting and ending columns and rows
  startColumn, startRow, endColumn, endRow := s[0], s[1], s[3], s[4]

  // Store each cell in column-major order
  cells := []string{}

  // Visit each column in the range
  for column := startColumn; column <= endColumn; column++ {
    // Visit each row in the current column
    for row := startRow; row <= endRow; row++ {
      cells = append(cells, string([]byte{column, row}))
    }
  }

  // Return all cells in the required order
  return cells
}
