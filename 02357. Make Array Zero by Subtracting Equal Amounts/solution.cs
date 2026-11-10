/**
 * Problem: 2357. Make Array Zero by Subtracting Equal Amounts
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinimumOperations(int[] nums)
  {
    // Track which positive values have already been counted
    bool[] seenValues = new bool[100];

    // Count the distinct positive values in the array
    int operationCount = 0;

    // Check every number for its first occurrence
    for (int i = 0; i < nums.Length; i++)
    {
      // Count unseen positive values and mark them as seen
      if (nums[i] > 0 && !seenValues[nums[i] - 1])
      {
        operationCount++;
        seenValues[nums[i] - 1] = true;
      }
    }

    // Return the number of required operations
    return operationCount;
  }
}
