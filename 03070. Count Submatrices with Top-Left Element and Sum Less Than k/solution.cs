/**
 * Problem: 3070. Count Submatrices with Top-Left Element and Sum Less Than k
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

public class Solution
{
  public int CountSubmatrices(int[][] grid, int k)
  {
    // Get matrix dimensions
    int rows = grid.Length,
      cols = grid[0].Length;

    // Track running column sums
    int[] columnSums = new int[cols];

    // Initialize result counter
    int validCount = 0;

    // Iterate through each row as potential top of submatrix
    for (int topRow = 0; topRow < rows; topRow++)
    {
      // Track running row sum for current submatrix
      int rowSum = 0;

      // Expand submatrix to the right column by column
      for (int rightCol = 0; rightCol < cols; rightCol++)
      {
        // Add current cell to column sum
        columnSums[rightCol] += grid[topRow][rightCol];

        // Add this column's total to current row sum
        rowSum += columnSums[rightCol];

        // If current submatrix sum is within limit, count it
        if (rowSum <= k)
          validCount++;
      }
    }

    // Return total count of valid submatrices
    return validCount;
  }
}
