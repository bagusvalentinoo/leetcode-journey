/**
 * Problem: 2319. Check if Matrix Is X-Matrix
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool checkXMatrix(vector<vector<int>> &grid) {
    // Store the matrix dimension for diagonal comparisons
    int size = grid.size();

    // Check every cell against its required diagonal value
    for (int row = 0; row < size; row++) {
      for (int column = 0; column < size; column++) {
        // Determine whether the current cell belongs to either diagonal
        bool isDiagonal = row == column || row + column == size - 1;

        // Reject a zero diagonal cell or a non-zero non-diagonal cell
        if (isDiagonal ? grid[row][column] == 0 : grid[row][column] != 0)
          return false;
      }
    }

    // Return true when every cell meets its requirement
    return true;
  }
};
