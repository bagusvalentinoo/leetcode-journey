/**
 * Problem: 1329. Sort the Matrix Diagonally
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

public class Solution
{
  public int[][] DiagonalSort(int[][] mat)
  {
    // Get matrix dimensions
    int rows = mat.Length,
      cols = mat[0].Length;

    // Helper function to sort a single diagonal starting at (row, col)
    void SortDiagonal(int startRow, int startCol)
    {
      // Array to store values from the diagonal
      List<int> diagonalValues = new List<int>();

      // Temporary pointers to traverse the diagonal
      int currentRow = startRow,
        currentCol = startCol;

      // Collect all values from the diagonal
      while (currentRow < rows && currentCol < cols)
      {
        // Add current cell value to array
        diagonalValues.Add(mat[currentRow][currentCol]);

        // Move to next cell along the diagonal
        currentRow++;
        currentCol++;
      }

      // Sort the diagonal values in ascending order
      diagonalValues.Sort((a, b) => a - b);

      // Reset pointers to traverse the diagonal again
      currentRow = startRow;
      currentCol = startCol;

      // Index to track position in sorted array
      int index = 0;

      // Place sorted values back into the diagonal
      while (currentRow < rows && currentCol < cols)
      {
        // Assign sorted value to current cell
        mat[currentRow][currentCol] = diagonalValues[index++];

        // Move to next cell along the diagonal
        currentRow++;
        currentCol++;
      }
    }

    // Sort all diagonals starting from first column (left edge)
    for (int i = 0; i < rows; i++)
      SortDiagonal(i, 0);

    // Sort all diagonals starting from first row (top edge), skipping (0,0) already done
    for (int j = 1; j < cols; j++)
      SortDiagonal(0, j);

    // Return the matrix with sorted diagonals
    return mat;
  }
}
