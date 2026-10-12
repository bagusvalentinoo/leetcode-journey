/**
 * Problem: 1929. Concatenation of Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] GetConcatenation(int[] nums)
  {
    // Store the length of the input array
    int n = nums.Length;

    // Create result array with double the input length
    int[] answer = new int[2 * n];

    // Copy each element into both halves of the result
    for (int i = 0; i < n; i++)
    {
      answer[i] = nums[i];
      answer[i + n] = nums[i];
    }

    // Return the concatenated array
    return answer;
  }
}
