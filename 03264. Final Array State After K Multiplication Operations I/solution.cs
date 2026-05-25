/**
 * Problem: 3264. Final Array State After K Multiplication Operations I
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] GetFinalState(int[] nums, int k, int multiplier)
  {
    // Perform k operations
    while (k-- > 0)
    {
      // Assume first element is the smallest
      int smallestValue = nums[0];
      int smallestIndex = 0;

      // Find the smallest element in the array
      for (int currentIndex = 0; currentIndex < nums.Length; currentIndex++)
      {
        // Update smallest if current element is smaller
        if (nums[currentIndex] < smallestValue)
        {
          smallestValue = nums[currentIndex];
          smallestIndex = currentIndex;
        }
      }

      // Multiply the smallest element by multiplier
      nums[smallestIndex] *= multiplier;
    }

    // Return the modified array
    return nums;
  }
}
