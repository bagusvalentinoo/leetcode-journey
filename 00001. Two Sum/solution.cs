/**
 * Problem: 1. Two Sum
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] TwoSum(int[] nums, int target)
  {
    //
    Dictionary<int, int> map = new Dictionary<int, int>();

    //
    map[nums[0]] = 0;

    //
    for (int i = 1; i < nums.Length; i++)
    {
      //
      if (map.TryGetValue(target - nums[i], out int ind))
        return new int[] { i, ind };
      else
        map[nums[i]] = i;
    }

    return [];
  }
}
