/**
 * Problem: 3643. Flip Square Submatrix Vertically
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<vector<int>> reverseSubmatrix(vector<vector<int>> &grid, int x, int y,
                                       int k) {
    // Pointer for top row of submatrix
    int topRow = x;
    // Pointer for bottom row of submatrix
    int bottomRow = x + k - 1;

    // Swap rows from top to bottom until they meet
    while (topRow < bottomRow) {
      // Swap all columns in current row pair
      for (int col = y; col < y + k; col++) {
        // Store current top row value
        int tempValue = grid[topRow][col];

        // Replace top row with bottom row value
        grid[topRow][col] = grid[bottomRow][col];
        // Replace bottom row with stored top row value
        grid[bottomRow][col] = tempValue;
      }

      // Move pointers inward
      topRow++;
      bottomRow--;
    }

    // Return grid with reversed submatrix
    return grid;
  }
};
