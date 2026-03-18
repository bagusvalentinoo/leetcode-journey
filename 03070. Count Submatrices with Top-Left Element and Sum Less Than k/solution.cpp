/**
 * Problem: 3070. Count Submatrices with Top-Left Element and Sum Less Than k
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countSubmatrices(vector<vector<int>> &grid, int k) {
    // Get matrix dimensions
    int rows = grid.size(), cols = grid[0].size();

    // Build prefix sums for first row
    for (int col = 1; col < cols; col++)
      grid[0][col] += grid[0][col - 1];

    // Build prefix sums for remaining rows
    for (int row = 1; row < rows; row++) {
      // Track running sum for current row
      int rowPrefix = grid[row][0];

      // First column: add previous row's first column value
      grid[row][0] = grid[row - 1][0] + rowPrefix;

      // Process remaining columns
      for (int col = 1; col < cols; col++) {
        // Update running row sum
        rowPrefix += grid[row][col];

        // Prefix sum formula: above cell + current row prefix
        grid[row][col] = grid[row - 1][col] + rowPrefix;
      }
    }

    // Count valid submatrices
    int validCount = 0;

    // Check each cell representing sum of submatrix from (0,0) to (i,j)
    for (int row = 0; row < rows; row++) {
      for (int col = 0; col < cols; col++) {
        // If sum is within limit, count this submatrix
        if (grid[row][col] <= k)
          validCount++;
      }
    }

    return validCount;
  }
};
