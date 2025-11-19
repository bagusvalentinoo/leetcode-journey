/**
 * Problem: 2154. Keep Multiplying Found Values by Two
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int FindFinalValue(int[] nums, int original)
  {
    // Loop continues as long as the array 'nums' contains the value 'original'.
    while (nums.Contains(original))
    {
      // Double the value of 'original' if it is found in the array.
      original *= 2;
    }

    // Return the final value of 'original' after the loop ends.
    return original;
  }
}