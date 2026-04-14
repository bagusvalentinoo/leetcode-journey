/**
 * Problem: 3402. Minimum Operations to Make Columns Strictly Increasing
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinimumOperations(int[][] grid)
  {
    // Total operations counter
    var totalOperations = 0;

    // Iterate through each column
    for (int col = 0; col < grid[0].Length; col++)
    {
      // Track previous row's value in current column
      var previousValue = grid[0][col];

      // Iterate through rows from top to bottom
      for (int row = 1; row < grid.Length; row++)
      {
        // Calculate operations needed: 0 if current > previous, else difference + 1
        var neededOps = grid[row][col] > previousValue ? 0 : previousValue - grid[row][col] + 1;

        // Update previous value to new value after operations
        previousValue = grid[row][col] + neededOps;
        // Add to total operations
        totalOperations += neededOps;
      }
    }

    // Return total operations needed
    return totalOperations;
  }
}
