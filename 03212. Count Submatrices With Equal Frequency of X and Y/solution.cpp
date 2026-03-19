/**
 * Problem: 3212. Count Submatrices With Equal Frequency of X and Y
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 12 ms (Beats 100%)
 */

class Solution {
public:
  int numberOfSubmatrices(vector<vector<char>> &grid) {
    // Get grid dimensions
    int rows = grid.size(), cols = grid[0].size();

    // Track cumulative counts for each column
    vector<int> xColumnCounts(cols, 0), yColumnCounts(cols, 0);

    // Initialize total valid submatrices counter
    int totalValid = 0;

    // Process each row as potential top of submatrix
    for (int currentRow = 0; currentRow < rows; currentRow++) {
      // Track counts for current row
      int rowXCount = 0, rowYCount = 0;

      // Expand submatrix to the right column by column
      for (int currentCol = 0; currentCol < cols; currentCol++) {
        // Update row counts based on current cell
        if (grid[currentRow][currentCol] == 'X')
          rowXCount++;
        if (grid[currentRow][currentCol] == 'Y')
          rowYCount++;

        // Update cumulative column counts
        xColumnCounts[currentCol] += rowXCount;
        yColumnCounts[currentCol] += rowYCount;

        // Check if current submatrix from (0,0) to (currentRow, currentCol) is
        // valid
        if (xColumnCounts[currentCol] > 0 &&
            xColumnCounts[currentCol] == yColumnCounts[currentCol])
          totalValid++;
      }
    }

    // Return total valid submatrices
    return totalValid;
  }
};
