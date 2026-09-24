/**
 * Problem: 1812. Determine Color of a Chessboard Square
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool squareIsWhite(string coordinates) {
    // Convert file letter to column number (a -> 1, b -> 2, ..., h -> 8)
    // Convert rank character to row number (1 -> 1, ..., 8 -> 8)
    int column = coordinates[0] - 'a' + 1, row = coordinates[1] - '0';

    // White squares have odd sum of column and row, black squares have even sum
    // Return true if sum is odd (white), false if even (black)
    return (column + row) % 2 == 1;
  }
};
