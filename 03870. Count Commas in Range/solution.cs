/**
 * Problem: 3870. Count Commas in Range
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountCommas(int n)
  {
    // Return the number of commas needed when writing all integers from 1 to n
    return Math.Max(0, n - 999);
  }
}
