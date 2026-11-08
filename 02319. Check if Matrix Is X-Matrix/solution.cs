/**
 * Problem: 2319. Check if Matrix Is X-Matrix
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool CheckXMatrix(int[][] grid)
  {
    // Store the matrix dimension for diagonal comparisons.
    int gridLength = grid.Length;

    // Check every cell against its required diagonal value
    for (int i = 0; i < gridLength; i++)
    {
      for (int j = 0; j < gridLength; j++)
      {
        // Check diagonal cells for zero values.
        if (i == j || i == gridLength - 1 - j)
        {
          if (grid[i][j] == 0) return false;
        }
        else
        {
          // Check non-diagonal cells for non-zero values.
          if (grid[i][j] != 0) return false;
        }
      }
    }

    // Return true when every cell meets its requirement
    return true;
  }
}
