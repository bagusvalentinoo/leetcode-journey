/**
 * Problem: 1594. Maximum Non Negative Product in a Matrix
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int maxProductPath(vector<vector<int>> &grid) {
    // Modulo constant for result
    const int MOD = 1e9 + 7;

    // Get grid dimensions
    int rows = grid.size();
    int cols = grid[0].size();

    // DP arrays to track max and min products at each cell
    // Track both because negative numbers can flip min to max
    vector<vector<long long>> maxProduct(rows, vector<long long>(cols, 0));
    vector<vector<long long>> minProduct(rows, vector<long long>(cols, 0));

    // Initialize starting cell
    maxProduct[0][0] = minProduct[0][0] = grid[0][0];

    // Fill DP table row by row
    for (int row = 0; row < rows; row++) {
      for (int col = 0; col < cols; col++) {
        // Skip starting cell
        if (row == 0 && col == 0)
          continue;

        long long maxVal = LLONG_MIN;
        long long minVal = LLONG_MAX;

        // From top cell (if exists)
        if (row > 0) {
          // Calculate product from top cell using both max and min paths
          // Because multiplying by current cell could flip max/min if current
          // cell is negative
          long long val1 = maxProduct[row - 1][col] * grid[row][col];
          long long val2 = minProduct[row - 1][col] * grid[row][col];

          // Update maxVal: take the larger of the two possible products from
          // top
          maxVal = max(maxVal, max(val1, val2));
          // Update minVal: take the smaller of the two possible products from
          // top
          minVal = min(minVal, min(val1, val2));
        }

        // From left cell (if exists)
        if (col > 0) {
          // Calculate product from left cell using both max and min paths
          // Because multiplying by current cell could flip max/min if current
          // cell is negative
          long long val1 = maxProduct[row][col - 1] * grid[row][col];
          long long val2 = minProduct[row][col - 1] * grid[row][col];

          // Update maxVal: take the larger of the two possible products from
          // left
          maxVal = max(maxVal, max(val1, val2));
          // Update minVal: take the smaller of the two possible products from
          // left
          minVal = min(minVal, min(val1, val2));
        }

        // Store the max and min products for current cell
        maxProduct[row][col] = maxVal;
        minProduct[row][col] = minVal;
      }
    }

    // Get final product at bottom-right corner
    long long finalProduct = maxProduct[rows - 1][cols - 1];

    // Return result modulo MOD if positive, otherwise -1
    return finalProduct >= 0 ? finalProduct % MOD : -1;
  }
};
