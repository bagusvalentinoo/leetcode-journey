/**
 * Problem: 48. Rotate Image
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public void Rotate(int[][] matrix)
  {
    // Get matrix size
    int size = matrix.Length;

    // Process each layer from outermost to innermost
    for (int layer = 0; layer < size / 2; layer++)
    {
      // Process each element in current layer
      for (int offset = layer; offset < size - layer - 1; offset++)
      {
        // Store top element temporarily
        int top = matrix[layer][offset];

        // Move left element to top
        matrix[layer][offset] = matrix[size - offset - 1][layer];
        // Move bottom element to left
        matrix[size - offset - 1][layer] = matrix[size - layer - 1][size - offset - 1];
        // Move right element to bottom
        matrix[size - layer - 1][size - offset - 1] = matrix[offset][size - layer - 1];
        // Move stored top element to right
        matrix[offset][size - layer - 1] = top;
      }
    }
  }
}
