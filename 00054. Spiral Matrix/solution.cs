/**
 * Problem: 54. Spiral Matrix
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<int> SpiralOrder(int[][] matrix)
  {
    // Array to store spiral order elements
    List<int> result = new List<int>();

    // Initialize top and bottom row boundaries
    int top = 0,
      bottom = matrix.Length - 1;

    // Initialize left and right column boundaries
    int left = 0,
      right = matrix[0].Length - 1;

    // Continue while boundaries haven't crossed
    while (top <= bottom && left <= right)
    {
      // Traverse top row from left to right
      for (int i = left; i <= right; i++)
        result.Add(matrix[top][i]);

      // Move top boundary down
      top++;

      // Traverse right column from top to bottom
      for (int i = top; i <= bottom; i++)
        result.Add(matrix[i][right]);

      // Move right boundary left
      right--;

      // Check if there are rows remaining
      if (top <= bottom)
      {
        // Traverse bottom row from right to left
        for (int i = right; i >= left; i--)
        {
          result.Add(matrix[bottom][i]);
        }
      }

      // Move bottom boundary up
      bottom--;

      // Check if there are columns remaining
      if (left <= right)
      {
        // Traverse left column from bottom to top
        for (int i = bottom; i >= top; i--)
        {
          result.Add(matrix[i][left]);
        }
      }

      // Move left boundary right
      left++;
    }

    // Return spiral order traversal
    return result;
  }
}
