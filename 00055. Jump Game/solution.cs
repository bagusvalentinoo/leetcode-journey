/**
 * Problem: 55. Jump Game
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool CanJump(int[] nums)
  {
    // Start with the last index as the goal
    int goal = nums.Length - 1;

    // Traverse backwards from second last element to the beginning
    for (int i = nums.Length - 2; i >= 0; i--)
    {
      // If current position can reach or surpass the goal, update goal
      if (i + nums[i] >= goal)
        goal = i;
    }

    // If goal reaches index 0, the start can reach the end
    return goal == 0;
  }
}
