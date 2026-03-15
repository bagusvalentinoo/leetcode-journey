/**
 * Problem: 1314. Matrix Block Sum
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<vector<int>> matrixBlockSum(vector<vector<int>> &mat, int k) {
    // Get matrix dimensions for iteration boundaries
    int rows = mat.size(), cols = mat[0].size();

    // Create prefix sum array with extra row and column for easier calculations
    vector<vector<int>> prefixSum(rows + 1, vector<int>(cols + 1, 0));

    // Build prefix sum matrix row by row
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++)
        // Formula: current cell + top cell + left cell - top-left diagonal cell
        // This gives sum of all elements in rectangle from (0,0) to (i,j)
        prefixSum[i + 1][j + 1] = mat[i][j] + prefixSum[i][j + 1] +
                                  prefixSum[i + 1][j] - prefixSum[i][j];
    }

    // Replace each cell with sum of its k×k block
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        // Calculate block boundaries, clamped to matrix edges
        int top = max(0, i - k), bottom = min(rows - 1, i + k),
            left = max(0, j - k), right = min(cols - 1, j + k);

        // Use inclusion-exclusion principle with prefix sums:
        // Block sum = (bottom-right) - (top-right) - (bottom-left) + (top-left)
        mat[i][j] = prefixSum[bottom + 1][right + 1] -
                    prefixSum[top][right + 1] - prefixSum[bottom + 1][left] +
                    prefixSum[top][left];
      }
    }

    // Return the modified matrix with block sums
    return mat;
  }
};
