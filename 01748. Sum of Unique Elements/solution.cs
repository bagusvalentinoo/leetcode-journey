/**
 * Problem: 1748. Sum of Unique Elements
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int SumOfUnique(int[] nums)
  {
    // Initialize frequency array for values 0 to 100
    int[] frequency = new int[101];

    // Count occurrences of each number
    foreach (int num in nums) frequency[num]++;

    // Store sum of unique elements
    int answer = 0;

    // Add values that appear exactly once
    for (int num = 1; num <= 100; num++)
    {
      // Check if current value is unique
      if (frequency[num] == 1) answer += num;
    }

    // Return the sum of all unique elements
    return answer;
  }
}
