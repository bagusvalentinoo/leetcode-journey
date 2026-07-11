/**
 * Problem: 3898. Find the Degree of Each Vertex
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] FindDegrees(int[][] matrix)
  {
    // Initialize result array with length equal to number of rows
    int[] result = new int[matrix.Length];

    // Iterate through each row in the matrix
    for (int i = 0; i < matrix.Length; i++)
    {
      // Iterate through each element in the current row
      for (int j = 0; j < matrix[i].Length; j++)
        // Add current element to the row sum
        result[i] += matrix[i][j];
    }

    // Return array containing sums of each row
    return result;
  }
}
