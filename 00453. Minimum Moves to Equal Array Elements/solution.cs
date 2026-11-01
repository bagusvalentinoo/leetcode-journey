/**
 * Problem: 453. Minimum Moves to Equal Array Elements
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinMoves(int[] nums)
  {
    // Find minimum value in array
    int minVal = nums[0];
    long sum = 0;

    // Accumulate total sum and find minimum element
    for (int i = 0; i < nums.Length; i++)
    {
      if (nums[i] < minVal) minVal = nums[i];
      sum += nums[i];
    }

    // Each move of incrementing n-1 elements is equivalent to decrementing 1 element
    return (int)(sum - (long)nums.Length * minVal);
  }
}
