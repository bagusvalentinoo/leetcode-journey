/**
 * Problem: 3471. Find the Largest Almost Missing Integer
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int LargestInteger(int[] nums, int k)
  {
    // Frequency array for numbers 1-50 (since constraints likely allow this range)
    int[] frequency = new int[51];

    // Count occurrences of each number in the array
    for (int index = 0; index < nums.Length; index++)
      frequency[nums[index]]++;

    // Case 1: k equals 1 (each subarray is a single element)
    if (k == 1)
    {
      // Initialize maximum value to -1
      int maxUniqueValue = -1;

      // Traverse from highest to lowest to find largest number with frequency 1
      for (int number = 50; number >= 0 && maxUniqueValue < 0; number--)
      {
        // If number appears exactly once, set as max
        if (frequency[number] == 1)
          maxUniqueValue = number;
      }

      // Return largest unique value
      return maxUniqueValue;
    }

    // Case 2: k equals array length (only one subarray)
    if (k == nums.Length)
    {
      // Initialize maximum value to -1
      int maxValue = -1;

      // Traverse from highest to lowest to find largest number present in array
      for (int number = 50; number >= 0 && maxValue < 0; number--)
      {
        // If number appears at least once, set as max
        if (frequency[number] > 0)
          maxValue = number;
      }

      // Return maximum value in array
      return maxValue;
    }

    // Case 3: k is between 2 and n-1
    // Only first and last elements can be candidates
    int firstCandidate = frequency[nums[0]] == 1 ? nums[0] : -1,
      lastCandidate = frequency[nums[^1]] == 1 ? nums[^1] : -1;

    // Return the maximum of the two candidates
    return Math.Max(firstCandidate, lastCandidate);
  }
}
