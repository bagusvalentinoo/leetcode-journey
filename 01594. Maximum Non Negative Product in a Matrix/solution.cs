/**
 * Problem: 1594. Maximum Non Negative Product in a Matrix
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxProductPath(int[][] grid)
  {
    // Modulo constant for result
    const int MOD = 1000000007;

    // Get grid dimensions
    int rows = grid.Length,
      cols = grid[0].Length;

    // DP arrays to track max and min products at each cell
    // Track both because negative numbers can flip min to max
    long[][] maxProduct = new long[rows][];
    long[][] minProduct = new long[rows][];

    // Initialize DP arrays
    for (int i = 0; i < rows; i++)
    {
      maxProduct[i] = new long[cols];
      minProduct[i] = new long[cols];
    }

    // Initialize starting cell
    maxProduct[0][0] = minProduct[0][0] = grid[0][0];

    // Fill DP table row by row
    for (int row = 0; row < rows; row++)
    {
      for (int col = 0; col < cols; col++)
      {
        // Skip starting cell
        if (row == 0 && col == 0)
          continue;

        // Track max and min for current cell
        long maxVal = long.MinValue,
          minVal = long.MaxValue;

        // From top cell (if exists)
        if (row > 0)
        {
          // Calculate product from top cell using both max and min paths
          // Because multiplying by current cell could flip max/min if current cell is negative
          long val1 = maxProduct[row - 1][col] * grid[row][col],
            val2 = minProduct[row - 1][col] * grid[row][col];

          // Update maxVal: take the larger of the two possible products from top
          maxVal = Math.Max(maxVal, Math.Max(val1, val2));
          // Update minVal: take the smaller of the two possible products from top
          minVal = Math.Min(minVal, Math.Min(val1, val2));
        }

        // From left cell (if exists)
        if (col > 0)
        {
          // Calculate product from left cell using both max and min paths
          // Because multiplying by current cell could flip max/min if current cell is negative
          long val1 = maxProduct[row][col - 1] * grid[row][col],
            val2 = minProduct[row][col - 1] * grid[row][col];

          // Update maxVal: take the larger of the two possible products from left
          maxVal = Math.Max(maxVal, Math.Max(val1, val2));
          // Update minVal: take the smaller of the two possible products from left
          minVal = Math.Min(minVal, Math.Min(val1, val2));
        }

        maxProduct[row][col] = maxVal;
        minProduct[row][col] = minVal;
      }
    }

    // Get final product at bottom-right corner
    long finalProduct = maxProduct[rows - 1][cols - 1];

    // Return result modulo MOD if positive, otherwise -1
    return finalProduct >= 0 ? (int)(finalProduct % MOD) : -1;
  }
}
