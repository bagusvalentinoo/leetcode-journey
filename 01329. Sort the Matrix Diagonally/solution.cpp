/**
 * Problem: 1329. Sort the Matrix Diagonally
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<vector<int>> diagonalSort(vector<vector<int>> &mat) {
    // Get matrix dimensions
    int rows = mat.size(), cols = mat[0].size();

    // Helper function to sort a single diagonal starting at (row, col)
    auto sortDiagonal = [&](int startRow, int startCol) {
      // Array to store values from the diagonal
      vector<int> diagonalValues;

      // Temporary pointers to traverse the diagonal
      int currentRow = startRow, currentCol = startCol;

      // Collect all values from the diagonal
      while (currentRow < rows && currentCol < cols) {
        // Add current cell value to array
        diagonalValues.push_back(mat[currentRow][currentCol]);

        // Move to next cell along the diagonal
        currentRow++;
        currentCol++;
      }

      // Sort the diagonal values in ascending order
      sort(diagonalValues.begin(), diagonalValues.end());

      // Reset pointers to traverse the diagonal again
      currentRow = startRow;
      currentCol = startCol;

      // Index to track position in sorted array
      int index = 0;

      // Place sorted values back into the diagonal
      while (currentRow < rows && currentCol < cols) {
        // Assign sorted value to current cell
        mat[currentRow][currentCol] = diagonalValues[index++];

        // Move to next cell along the diagonal
        currentRow++;
        currentCol++;
      }
    };

    // Sort all diagonals starting from first column (left edge)
    for (int i = 0; i < rows; i++)
      sortDiagonal(i, 0);

    // Sort all diagonals starting from first row (top edge), skipping (0,0)
    // already done
    for (int j = 1; j < cols; j++)
      sortDiagonal(0, j);

    // Return the matrix with sorted diagonals
    return mat;
  }
};
