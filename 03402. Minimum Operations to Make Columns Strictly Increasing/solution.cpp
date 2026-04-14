/**
 * Problem: 3402. Minimum Operations to Make Columns Strictly Increasing
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minimumOperations(vector<vector<int>> &grid) {
    // If only one row, no operations needed
    if (grid.size() == 1)
      return 0;

    // Initialize operations counter and column pointer
    int operations = 0, column = 0;

    // Get number of columns in the grid
    int columnCount = grid[0].size();

    // Process each column independently
    while (column < columnCount) {
      // Iterate through rows from top to bottom
      for (int row = 1; row < grid.size(); row++) {
        // Check if current value is not greater than previous row's value
        if (grid[row][column] <= grid[row - 1][column]) {
          // Calculate how much to increase to make it strictly greater
          int increment = grid[row - 1][column] - grid[row][column] + 1;

          // Apply increment to current cell
          grid[row][column] = grid[row][column] + increment;
          // Add increment to total operations count
          operations += increment;
        }
      }

      // Move to next column
      column++;
    }

    // Return total operations
    return operations;
  }
};
