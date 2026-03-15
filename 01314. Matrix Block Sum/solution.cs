/**
 * Problem: 1314. Matrix Block Sum
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[][] MatrixBlockSum(int[][] mat, int k)
  {
    // Get matrix dimensions for iteration boundaries
    int rows = mat.Length,
      cols = mat[0].Length;

    // Create prefix sum array with extra row and column for easier calculations
    int[][] prefixSum = new int[rows + 1][];

    // Initialize first row of prefix sum with zeros
    prefixSum[0] = new int[cols + 1];

    // Build prefix sum matrix row by row
    for (int i = 0; i < rows; i++)
    {
      // Start each new row
      prefixSum[i + 1] = new int[cols + 1];

      // Calculate prefix sums for each column in current row
      for (int j = 0; j < cols; j++)
        // Formula: current cell + top cell + left cell - top-left diagonal cell
        // This gives sum of all elements in rectangle from (0,0) to (i,j)
        prefixSum[i + 1][j + 1] =
          mat[i][j] + prefixSum[i][j + 1] + prefixSum[i + 1][j] - prefixSum[i][j];
    }

    // Replace each cell with sum of its k×k block
    for (int i = 0; i < rows; i++)
    {
      // Process each column in current row
      for (int j = 0; j < cols; j++)
      {
        // Calculate block boundaries, clamped to matrix edges
        int top = Math.Max(0, i - k),
          bottom = Math.Min(rows - 1, i + k),
          left = Math.Max(0, j - k),
          right = Math.Min(cols - 1, j + k);

        // Use inclusion-exclusion principle with prefix sums:
        // Block sum = (bottom-right) - (top-right) - (bottom-left) + (top-left)
        mat[i][j] =
          prefixSum[bottom + 1][right + 1]
          - prefixSum[top][right + 1]
          - prefixSum[bottom + 1][left]
          + prefixSum[top][left];
      }
    }

    // Return the modified matrix with block sums
    return mat;
  }
}
