/**
 * Problem: 1351. Count Negative Numbers in a Sorted Matrix
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int countNegatives(vector<vector<int>> &grid)
  {
    // Get grid dimensions
    int rows = grid.size(), cols = grid[0].size();

    // Pointer for current row
    int currentRow = 0;

    // Pointer for current column (start from last column)
    int currentCol = cols - 1;

    // Counter for negative numbers
    int negativeCount = 0;

    // Traverse grid from top-right corner to bottom-left
    while (currentRow < rows && currentCol >= 0)
    {
      // If current element is negative
      if (grid[currentRow][currentCol] < 0)
      {
        // All elements below in this column are also negative
        negativeCount += rows - currentRow;
        // Move left to previous column
        currentCol--;
      }
      // If current element is non-negative, move down to next row
      else
        currentRow++;
    }

    // Return total count of negative numbers
    return negativeCount;
  }
};
