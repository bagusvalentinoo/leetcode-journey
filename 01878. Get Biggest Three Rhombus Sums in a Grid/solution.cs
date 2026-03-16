/**
 * Problem: 1878. Get Biggest Three Rhombus Sums in a Grid
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

public class Solution
{
  public int[] GetBiggestThree(int[][] grid)
  {
    // Get grid dimensions
    int rows = grid.Length,
      cols = grid[0].Length;

    // Variables to track top 3 distinct sums (f = first/largest, s = second, t = third)
    int first = 0,
      second = 0,
      third = 0;

    // Iterate through each cell as potential rhombus center
    for (int centerRow = 0; centerRow < rows; centerRow++)
    {
      for (int centerCol = 0; centerCol < cols; centerCol++)
      {
        // Update top sums with single cell value (size 1 rhombus)
        UpdateTopSums(ref first, ref second, ref third, grid[centerRow][centerCol]);

        // Maximum rhombus size based on grid boundaries
        int maxSize = Math.Min(
          Math.Min(centerCol, cols - 1 - centerCol), // Distance to left/right edges
          (rows - 1 - centerRow) / 2 // Distance to bottom edge (divided by 2 for height)
        );

        // Try all possible rhombus sizes
        for (int size = 1; size <= maxSize; size++)
        {
          // Initialize sum with the four corner points of the rhombus
          int rhombusSum =
            grid[centerRow][centerCol]
            + grid[centerRow + 2 * size][centerCol]
            + grid[centerRow + size][centerCol - size]
            + grid[centerRow + size][centerCol + size];

          // Add the perimeter points (excluding corners already counted)
          for (int step = 1; step < size; step++)
          {
            // Top-right diagonal points
            rhombusSum += grid[centerRow + step][centerCol + step];
            // Top-left diagonal points
            rhombusSum += grid[centerRow + step][centerCol - step];
            // Bottom-right diagonal points
            rhombusSum += grid[centerRow + size + step][centerCol - size + step];
            // Bottom-left diagonal points
            rhombusSum += grid[centerRow + size + step][centerCol + size - step];
          }

          // Update top sums with current rhombus sum
          UpdateTopSums(ref first, ref second, ref third, rhombusSum);
        }
      }
    }

    // Count how many positive sums we have
    int positiveCount = (first > 0 ? 1 : 0) + (second > 0 ? 1 : 0) + (third > 0 ? 1 : 0);

    // Create result array with appropriate size
    int[] result = new int[positiveCount];

    // Fill result array in descending order
    if (first > 0)
      result[0] = first;
    // Assign second largest value if it exists and array has space
    if (second > 0 && positiveCount > 1)
      result[1] = second;
    // Assign third largest value if it exists and array has space
    if (third > 0 && positiveCount > 2)
      result[2] = third;

    // Return the array containing the top distinct positive sums
    return result;
  }

  // Helper method to maintain top 3 distinct sums
  private void UpdateTopSums(ref int first, ref int second, ref int third, int value)
  {
    // Skip if value already exists in top 3
    if (value == first || value == second || value == third)
      return;

    // If value is larger than the largest, shift all down
    if (value > first)
    {
      third = second;
      second = first;
      first = value;
    }
    // If value is larger than second largest, shift second down
    else if (value > second)
    {
      third = second;
      second = value;
    }
    // If value is larger than third largest, replace third
    else if (value > third)
      third = value;
  }
}
