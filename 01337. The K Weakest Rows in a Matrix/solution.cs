/**
 * Problem: 1337. The K Weakest Rows in a Matrix
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] KWeakestRows(int[][] mat, int k)
  {
    // Get matrix dimensions
    int rows = mat.Length,
      cols = mat[0].Length;

    // Count soldiers in each row using binary search
    int[] soldierCounts = new int[rows];

    for (int i = 0; i < rows; i++)
    {
      // Binary search boundaries: left at start, right at end
      int left = 0, right = cols;

      // Find first 0 (boundary between soldiers and civilians)
      while (left < right)
      {
        // Calculate mid index
        int mid = (left + right) >> 1;

        // If mid is 0, search left half
        if (mat[i][mid] == 0)
          right = mid;
        // If mid is 1, search right half
        else
          left = mid + 1;
      }

      // Store soldier count (position of first 0)
      soldierCounts[i] = left;
    }

    // Create index array [0, 1, 2, ..., rows-1]
    int[] indices = new int[rows];

    // Populate indices with row numbers
    for (int i = 0; i < rows; i++)
      indices[i] = i;

    // Sort by soldier count then by index for ties
    Array.Sort(indices, (a, b) =>
      soldierCounts[a] != soldierCounts[b]
        ? soldierCounts[a].CompareTo(soldierCounts[b])
        : a.CompareTo(b)
    );

    // Create result array for k weakest rows
    int[] result = new int[k];

    // Copy first k indices to result
    for (int i = 0; i < k; i++)
      result[i] = indices[i];

    // Return k weakest row indices
    return result;
  }
}
