/**
 * Problem: 2194. Cells in a Range on an Excel Sheet
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<string> cellsInRange(string s) {
    // Extract the starting and ending columns and rows
    char startColumn = s[0], startRow = s[1], endColumn = s[3], endRow = s[4];

    // Store each cell in column-major order
    vector<string> cells;

    // Visit each column in the range
    for (char column = startColumn; column <= endColumn; column++) {
      // Visit each row in the current column
      for (char row = startRow; row <= endRow; row++)
        cells.push_back(string(1, column) + row);
    }

    // Return all cells in the required order
    return cells;
  }
};
