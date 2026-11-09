/**
 * Problem: 2460. Apply Operations to an Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] ApplyOperations(int[] nums)
  {
    // Track the current value and the next result position
    var readIndex = 0;
    var writeIndex = 0;

    // Process each value in the input array
    while (nums.Length > readIndex)
    {
      // Combine equal adjacent non-zero values
      if (readIndex + 1 < nums.Length && nums[readIndex] == nums[readIndex + 1] && nums[readIndex] != 0)
      {
        nums[writeIndex] = nums[readIndex] * 2;
        writeIndex++;

        // Skip the paired value after combining it
        readIndex++;
      }
      else
      {
        // Preserve each non-zero value
        if (nums[readIndex] != 0)
        {
          nums[writeIndex] = nums[readIndex];
          writeIndex++;
        }
      }

      // Advance to the next input value
      readIndex++;
    }

    // Fill remaining positions with zeros
    for (int i = writeIndex; i < nums.Length; i++)
      nums[i] = 0;

    // Return the modified input array
    return nums;
  }
}
