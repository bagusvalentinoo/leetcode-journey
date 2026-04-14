/**
 * Problem: 3880. Minimum Absolute Difference Between Two Values
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinAbsoluteDifference(int[] nums)
  {
    // Initialize minimum difference to maximum value
    int minDiff = int.MaxValue;

    // Track last non-zero index
    int lastIndex = -1;

    // Iterate through the array
    for (int i = 0; i < nums.Length; i++)
    {
      // Skip zero values
      if (nums[i] != 0)
      {
        // If we have a previous non-zero and values are different, update minDiff
        if (lastIndex != -1 && nums[lastIndex] != nums[i])
          minDiff = Math.Min(minDiff, i - lastIndex);

        // Update last non-zero index
        lastIndex = i;
      }
    }

    // Return -1 if no valid difference found, otherwise return minDiff
    return minDiff == int.MaxValue ? -1 : minDiff;
  }
}
