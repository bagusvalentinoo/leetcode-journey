/**
 * Problem: 3417. Zigzag Grid Traversal With Skip
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<int> ZigzagTraversal(int[][] grid)
  {
    // Get number of rows and columns in the grid
    int rows = grid.Length,
      cols = grid[0].Length;

    // List to store collected elements
    var result = new List<int>();

    // Iterate through each row in the grid
    for (int row = 0; row < rows; row++)
    {
      // Determine starting column based on row parity
      // Even row: start from column 0 (left)
      // Odd row: start from last column or second last based on column count
      int startCol = row % 2 == 0 ? 0 : (cols % 2 == 0 ? cols - 1 : cols - 2);

      // Determine step direction
      // Even row: move right (step +2)
      // Odd row: move left (step -2)
      int step = row % 2 == 0 ? 2 : -2;

      // Traverse columns with step of 2
      for (int col = startCol; col >= 0 && col < cols; col += step)
        result.Add(grid[row][col]);
    }

    // Return the final result
    return result;
  }
}
