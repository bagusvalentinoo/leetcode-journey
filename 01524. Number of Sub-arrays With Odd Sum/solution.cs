/**
 * Problem: 1524. Number of Sub-arrays With Odd Sum
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int NumOfSubarrays(int[] arr)
  {
    // Count prefix sums with odd parity using a mutable running sum
    int sum = 0;
    long odd = arr.Count(number => ((sum += number) & 1) == 1);

    // Count even prefix sums, including the empty prefix sum
    long even = arr.Length + 1 - odd;

    // Odd-sum subarrays pair one odd prefix sum with one even prefix sum
    return (int)(odd * even % 1_000_000_007);
  }
}
