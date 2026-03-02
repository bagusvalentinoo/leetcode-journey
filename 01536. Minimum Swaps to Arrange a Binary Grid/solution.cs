/**
 * Problem: 1536. Minimum Swaps to Arrange a Binary Grid
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

public class Solution
{
  public int MinSwaps(int[][] grid)
  {
    // Get grid size
    int size = grid.Length;

    // Array to store trailing zeros count for each row
    int[] trailingZeros = new int[size];

    // Calculate trailing zeros for each row
    for (int row = 0; row < size; row++)
    {
      // Count of trailing zeros for current row
      int zeroCount = 0;

      // Count trailing zeros from rightmost column to leftmost column
      for (int col = size - 1; col >= 0; col--)
        // If zero, increment count
        if (grid[row][col] == 0)
          zeroCount++;
        // If one, break
        else
          break;

      trailingZeros[row] = zeroCount;
    }

    // Track total swaps performed
    int swaps = 0;

    // Process each row from top to bottom
    for (int row = 0; row < size; row++)
    {
      // Required trailing zeros for current row
      int requiredZeros = size - row - 1;

      // Find row with enough trailing zeros at or below current position
      int foundIndex = -1;

      // Search for row with enough trailing zeros
      for (int j = row; j < size; j++)
      {
        // If found, store index and break
        if (trailingZeros[j] >= requiredZeros)
        {
          // Store index of found row
          foundIndex = j;

          // Break loop
          break;
        }
      }

      // If no suitable row found, configuration is impossible
      if (foundIndex == -1)
        return -1;

      // Bubble up the found row to its correct position
      while (foundIndex > row)
      {
        // Swap with row above
        int temp = trailingZeros[foundIndex];
        trailingZeros[foundIndex] = trailingZeros[foundIndex - 1];
        trailingZeros[foundIndex - 1] = temp;

        // Move found row up
        foundIndex--;
        // Increment swap count
        swaps++;
      }
    }

    // Return total swaps performed
    return swaps;
  }
}
