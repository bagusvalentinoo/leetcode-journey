/**
 * Problem: 54. Spiral Matrix
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> spiralOrder(vector<vector<int>> &matrix) {
    // Array to store spiral order elements
    vector<int> result;

    // Initialize top and bottom row boundaries
    int top = 0, bottom = matrix.size() - 1;

    // Initialize left and right column boundaries
    int left = 0, right = matrix[0].size() - 1;

    // Continue while boundaries haven't crossed
    while (top <= bottom && left <= right) {
      // Traverse top row from left to right
      for (int i = left; i <= right; i++)
        result.push_back(matrix[top][i]);

      // Move top boundary down
      top++;

      // Traverse right column from top to bottom
      for (int i = top; i <= bottom; i++)
        result.push_back(matrix[i][right]);

      // Move right boundary left
      right--;

      // Check if there are rows remaining
      if (top <= bottom) {
        // Traverse bottom row from right to left
        for (int i = right; i >= left; i--) {
          result.push_back(matrix[bottom][i]);
        }
      }

      // Move bottom boundary up
      bottom--;

      // Check if there are columns remaining
      if (left <= right) {
        // Traverse left column from bottom to top
        for (int i = bottom; i >= top; i--) {
          result.push_back(matrix[i][left]);
        }
      }

      // Move left boundary right
      left++;
    }

    // Return spiral order traversal
    return result;
  }
};
