/**
 * Problem: 1582. Special Positions in a Binary Matrix
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int NumSpecial(int[][] mat)
  {
    // Initialize the count of special positions
    int specialCount = 0;

    // Check each row for potential special positions
    for (int row = 0; row < mat.Length; row++)
    {
      // Find the column index of the single 1 in the current row
      int columnIndex = FindUniqueOneInRow(mat, row);

      // If row has exactly one 1 and that column has only that 1, count it
      if (columnIndex >= 0 && IsColumnUnique(mat, row, columnIndex))
        specialCount++;
    }

    // Return the count of special positions
    return specialCount;
  }

  // Finds column index if row has exactly one 1, otherwise returns -1
  private int FindUniqueOneInRow(int[][] mat, int row)
  {
    // Initialize the column index of the single 1 to -1
    int foundColumn = -1;

    // Scan through columns in current row
    for (int col = 0; col < mat[0].Length; col++)
    {
      // If a 1 is found in the current column
      if (mat[row][col] == 1)
      {
        // If already found a 1, this row has multiple 1s
        if (foundColumn >= 0)
          return -1;

        // Store the column index of the first 1 found
        foundColumn = col;
      }
    }

    // Return the column index of the single 1, or -1 if none or multiple
    return foundColumn;
  }

  // Checks if a column has only one 1 (at the specified row)
  private bool IsColumnUnique(int[][] mat, int row, int col)
  {
    // Check all rows in this column
    for (int r = 0; r < mat.Length; r++)
      // If another row has a 1 in this column, it's not unique
      if (mat[r][col] == 1 && r != row)
        return false;

    // If no other row has a 1 in this column, it's unique
    return true;
  }
}
