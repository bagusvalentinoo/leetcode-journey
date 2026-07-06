/**
 * Problem: 1480. Running Sum of 1d Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] RunningSum(int[] nums)
  {
    // Initialize output array with same length as input
    int[] runningSumArray = new int[nums.Length];

    // First element remains unchanged
    runningSumArray[0] = nums[0];

    // Calculate running sum for remaining elements
    for (int index = 1; index < nums.Length; index++)
      // Add current element to previous running sum
      runningSumArray[index] = runningSumArray[index - 1] + nums[index];

    // Return the running sum array
    return runningSumArray;
  }
}
