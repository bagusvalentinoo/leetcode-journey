/**
 * Problem: 1812. Determine Color of a Chessboard Square
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if chessboard square is white
 *
 * @param coordinates - Chessboard coordinates (e.g., "a1")
 *
 * @returns True if square is white, false if black
 */
const squareIsWhite = (coordinates: string): boolean => {
  // Convert file letter to column number (a -> 1, b -> 2, ..., h -> 8)
  // Convert rank character to row number (1 -> 1, ..., 8 -> 8)
  const column: number = coordinates.charCodeAt(0) - 97 + 1,
    row: number = Number(coordinates[1])

  // White squares have odd sum of column and row, black squares have even sum
  // Return true if sum is odd (white), false if even (black)
  return (column + row) % 2 === 1
}
