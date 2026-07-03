/**
 * Problem: 908. Smallest Range I
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int SmallestRangeI(int[] nums, int k)
  {
    // Initialize min and max with extreme values
    int minValue = int.MaxValue, maxValue = int.MinValue;

    // Find the minimum and maximum values in the array
    foreach (int num in nums)
    {
      // Update minimum value if current num is smaller
      minValue = Math.Min(minValue, num);
      // Update maximum value if current num is larger
      maxValue = Math.Max(maxValue, num);
    }

    // Calculate the minimum possible range after applying ±k to each element
    // The range can be reduced by 2k (increase min by k, decrease max by k)
    // If the result is negative, the range can be reduced to 0
    return Math.Max(0, maxValue - minValue - (2 * k));
  }
}
