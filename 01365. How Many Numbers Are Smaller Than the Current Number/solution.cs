/**
 * Problem: 1365. How Many Numbers Are Smaller Than the Current Number
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] SmallerNumbersThanCurrent(int[] nums)
  {
    // Length of the input array
    int arrayLength = nums.Length;

    // Frequency array for numbers 0-100
    int[] frequency = new int[101];
    // Result array to store counts of smaller numbers
    int[] result = new int[arrayLength];

    // Count occurrences of each number in the input array
    for (int i = 0; i < arrayLength; i++)
      frequency[nums[i]]++;

    // Variable to accumulate count of numbers smaller than current value
    int numbersSmallerCount = 0;

    // Convert frequency array to prefix sum of smaller numbers
    for (int value = 0; value < 101; value++)
    {
      // Store current frequency before overwriting
      int currentFrequency = frequency[value];

      // Update frequency[value] to hold count of numbers smaller than value
      frequency[value] = numbersSmallerCount;
      // Add current frequency to accumulator for next iteration
      numbersSmallerCount += currentFrequency;
    }

    // For each number in original array, get count of smaller numbers
    for (int i = 0; i < arrayLength; i++)
      result[i] = frequency[nums[i]];

    // Return the result array
    return result;
  }
}
