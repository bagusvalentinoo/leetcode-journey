/**
 * Problem: 1389. Create Target Array in the Given Order
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] CreateTargetArray(int[] nums, int[] index)
  {
    // Initialize list to store target array
    List<int> targetList = new List<int>();

    // Iterate through each element and insert at specified index
    for (int i = 0; i < nums.Length; i++)
      targetList.Insert(index[i], nums[i]);

    // Convert list to array and return
    return targetList.ToArray();
  }
}
