/**
 * Problem: 3467. Transform Array by Parity
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] TransformArray(int[] nums)
  {
    // Count number of even numbers (which will become 0)
    int zeroCount = 0;

    // Iterate through array to count even numbers
    foreach (int num in nums)
    {
      // If number is even, increment zero count
      if (num % 2 == 0)
        zeroCount++;
    }

    // Initialize result array with same length
    int[] result = new int[nums.Length];

    // Fill result array: zeros first, then ones
    for (int index = 0; index < nums.Length; index++)
    {
      // If we still have zeros to place
      if (zeroCount > 0)
      {
        // Place 0 at current position
        result[index] = 0;
        // Decrement remaining zero count
        zeroCount--;
      }
      // After all zeros are placed, fill remaining with 1
      else
        result[index] = 1;
    }

    // Return the transformed array
    return result;
  }
}
