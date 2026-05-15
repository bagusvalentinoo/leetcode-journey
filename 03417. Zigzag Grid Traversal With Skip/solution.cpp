/**
 * Problem: 3417. Zigzag Grid Traversal With Skip
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> zigzagTraversal(vector<vector<int>> &grid) {
    // Number of columns in the grid
    const int cols = grid[0].size();

    // Flags for skipping elements and reversing row order
    bool skipNext = false, reverseRow = false;

    // Vector to store collected elements
    vector<int> result;

    // Iterate through each row in the grid
    for (auto &row : grid) {
      for (int index = 0; index < cols; index++) {
        // If we need to skip this element
        if (skipNext) {
          // Reset skip flag
          skipNext = false;

          // Move to next element
          continue;
        }

        // Get value based on whether row should be reversed
        const int value = reverseRow ? row[cols - 1 - index] : row[index];

        // Add value to result
        result.push_back(value);

        // Skip the next element
        skipNext = true;
      }

      // Toggle reverse flag for next row
      reverseRow = !reverseRow;
    }

    // Return the final result
    return result;
  }
};
