/**
 * Problem: 1551. Minimum Operations to Make Array Equal
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinOperations(int n)
  {
    // Calculate minimum operations using formula n * n / 4
    return (n * n) / 4;
  }
}
