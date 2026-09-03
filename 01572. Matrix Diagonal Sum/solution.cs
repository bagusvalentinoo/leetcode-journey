/**
 * Problem: 1572. Matrix Diagonal Sum
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int DiagonalSum(int[][] mat)
  {
    // Get matrix dimension
    int n = mat.Length;

    // Initialize sum accumulator
    int total = 0;

    // Iterate through each row
    for (int i = 0; i < n; i++)
    {
      // Calculate secondary diagonal column index
      int secondaryCol = n - i - 1;

      // Add primary diagonal element at [i][i]
      total += mat[i][i];

      // Add secondary diagonal element if not same as primary (avoid double count center)
      if (i != secondaryCol) total += mat[i][secondaryCol];
    }

    // Return total diagonal sum
    return total;
  }
}
