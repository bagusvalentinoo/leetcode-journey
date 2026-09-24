/**
 * Problem: 1812. Determine Color of a Chessboard Square
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func squareIsWhite(coordinates string) bool {
  // Convert file letter to column number (a -> 1, b -> 2, ..., h -> 8)
  // Convert rank character to row number (1 -> 1, ..., 8 -> 8)
  column, row := int(coordinates[0]-'a'+1), int(coordinates[1]-'0')

  // White squares have odd sum of column and row, black squares have even sum
  // Return true if sum is odd (white), false if even (black)
  return (column+row)%2 == 1
}
