/**
 * Problem: 3866. First Unique Even Element
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int FirstUniqueEven(int[] nums)
  {
    // Create frequency array for numbers 1-100 (index 0 for 1, index 99 for 100)
    int[] frequency = new int[100];

    // Count occurrences of each number
    for (int i = 0; i < nums.Length; i++)
      frequency[nums[i] - 1]++;

    // Iterate through original array to find first unique even number
    for (int i = 0; i < nums.Length; i++)
    {
      // Check if number is even and appears exactly once
      if (nums[i] % 2 == 0 && frequency[nums[i] - 1] == 1)
        return nums[i];
    }

    // No unique even number found
    return -1;
  }
}
