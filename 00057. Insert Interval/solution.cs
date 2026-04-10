/**
 * Problem: 57. Insert Interval
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[][] Insert(int[][] intervals, int[] newInterval)
  {
    // Find the first index where interval ends after or at newInterval starts
    int left = 0;

    // Skip all intervals that end before newInterval starts
    while (left < intervals.Length && intervals[left][1] < newInterval[0])
      left++;

    // Find the last index where interval starts before or at newInterval ends
    int right = intervals.Length - 1;

    // Skip all intervals that start after newInterval ends
    while (right >= 0 && intervals[right][0] > newInterval[1])
      right--;

    // If there are overlapping intervals, merge them
    if (left <= right)
    {
      // Update start and end to the minimum and maximum values among overlapping intervals
      newInterval[0] = Math.Min(intervals[left][0], newInterval[0]);
      newInterval[1] = Math.Max(intervals[right][1], newInterval[1]);
    }

    // Return result: intervals before left, merged interval, intervals after right
    return [.. intervals[..left], newInterval, .. intervals[(right + 1)..]];
  }
}
