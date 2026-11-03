/**
 * Problem: 3736. Minimum Moves to Equal Array Elements III
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinMoves(int[] nums)
  {
    // Find the maximum value in the array
    int maxVal = nums[0];

    // Iterate through the array to find the maximum value
    for (int i = 1; i < nums.Length; i++)
    {
      if (nums[i] > maxVal) maxVal = nums[i];
    }

    // Accumulate total moves required to bring all elements to maxVal
    int totalMoves = 0;

    // Calculate difference from maximum element for each number
    for (int i = 0; i < nums.Length; i++) totalMoves += maxVal - nums[i];

    // Return the minimum total number of moves
    return totalMoves;
  }
}
