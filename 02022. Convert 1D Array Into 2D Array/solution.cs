/**
 * Problem: 2022. Convert 1D Array Into 2D Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[][] Construct2DArray(int[] original, int m, int n)
  {
    // Return empty array when total cells do not match input length
    if (m * n != original.Length) return new int[0][];

    // Store constructed rows
    int[][] answer = new int[m][];

    // Fill each row with n consecutive elements from the flat array
    for (int i = 0; i < m; i++)
    {
      // Initialize current row with n columns
      answer[i] = new int[n];

      // Copy n elements using flat index i * n + j
      for (int j = 0; j < n; j++) answer[i][j] = original[i * n + j];
    }

    // Return the constructed m x n 2D array
    return answer;
  }
}
