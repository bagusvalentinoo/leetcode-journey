/**
 * Problem: 757. Set Intersection Size At Least Two
 *
 * Difficulty: Hard
 *
 * Language: C#
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

public class Solution
{
  public int IntersectionSizeTwo(int[][] intervals)
  {
    // Sort the intervals based on their end points in ascending order.
    // If two intervals have the same end point, sort by their start points in descending order.
    Array.Sort(intervals, (a, b) => a[1] != b[1] ? a[1] - b[1] : b[0] - a[0]);

    // Initialize the count of elements in the intersection set to 0.
    int count = 0;

    // Initialize two variables to track the last two elements added to the set.
    // These are initially set to -1 to indicate no elements have been added yet.
    int lastElement = -1, secondLastElement = -1;

    // Iterate through each interval in the sorted list.
    foreach (var interval in intervals)
    {
      // Extract the start and end points of the current interval.
      int start = interval[0], end = interval[1];

      // Check if the current interval starts after the last element in the set.
      if (start > lastElement)
      {
        // Add the last two elements of the interval to the set.
        secondLastElement = end - 1;
        lastElement = end;

        // Increment the count by 2 since two elements are added.
        count += 2;
      }
      // Check if the current interval starts after the second last element in the set.
      else if (start > secondLastElement)
      {
        // Add the last element of the interval to the set.
        secondLastElement = lastElement;
        lastElement = end;

        // Increment the count by 1 since one element is added.
        count++;
      }
    }

    // Return the total count of elements in the intersection set.
    return count;
  }
}