/**
 * Problem: 2549. Count Distinct Numbers on Board
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int DistinctIntegers(int n)
  {
    // Initialize counter for distinct integers
    int reachableCount = 0;

    // Continue while we can subtract 1
    while (n >= 2)
    {
      // Count this integer
      reachableCount++;

      // Subtract 1 to get next integer
      n = n - 1;
    }

    // Return count if any reached, otherwise return 1 (for n = 1)
    return reachableCount != 0 ? reachableCount : 1;
  }
}
