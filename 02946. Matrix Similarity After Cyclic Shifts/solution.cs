/**
 * Problem: 2946. Matrix Similarity After Cyclic Shifts
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool AreSimilar(int[][] mat, int k)
  {
    // Get the number of columns in the matrix
    int cols = mat[0].Length;

    // Check each row in the matrix
    for (int row = 0; row < mat.Length; row++)
    {
      // Check each element in current row
      for (int col = 0; col < cols; col++)
      {
        // Calculate the shifted column index
        int shiftedCol = (col + k) % cols;

        // Compare the current element with the shifted element
        if (mat[row][col] != mat[row][shiftedCol])
          return false;
      }
    }

    // If all elements are equal to their shifted counterparts, return true
    return true;
  }
}
