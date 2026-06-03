/**
 * Problem: 1380. Lucky Numbers in a Matrix
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<int> LuckyNumbers(int[][] matrix)
  {
    // Get number of rows and columns in the matrix
    int rowCount = matrix.Length, columnCount = matrix[0].Length;

    // List to store lucky numbers found
    IList<int> luckyNumbersList = new List<int>();

    // Iterate through each row in the matrix
    for (int rowIndex = 0; rowIndex < rowCount; rowIndex++)
    {
      // Initialize minimum value with first element of the row
      int minValue = matrix[rowIndex][0];
      // Track column index where minimum value is found
      int minColumnIndex = 0;

      // Find the minimum value and its column in the current row
      for (int columnIndex = 1; columnIndex < columnCount; columnIndex++)
      {
        // If current element is smaller than current minimum
        if (matrix[rowIndex][columnIndex] < minValue)
        {
          // Update minimum value
          minValue = matrix[rowIndex][columnIndex];
          // Update column index of minimum
          minColumnIndex = columnIndex;
        }
      }

      // Flag to check if the minimum is also maximum in its column
      bool isLuckyNumber = true;

      // Check all rows in the column where minimum was found
      for (int row = 0; row < rowCount; row++)
      {
        // If any element in this column is greater than minValue
        if (matrix[row][minColumnIndex] > minValue)
        {
          isLuckyNumber = false;
          break;
        }
      }

      // If number passes both conditions, add it to result
      if (isLuckyNumber)
        luckyNumbersList.Add(minValue);
    }

    // Return list of lucky numbers
    return luckyNumbersList;
  }
}
