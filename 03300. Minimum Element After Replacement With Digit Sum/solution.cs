/**
 * Problem: 3300. Minimum Element After Replacement With Digit Sum
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinElement(int[] nums)
  {
    //
    int res = int.MaxValue;

    //
    for (int i = 0; i < nums.Length; i++)
    {
      //
      int temp = nums[i];
      //
      int newNum = 0;

      //
      while (temp > 0)
      {
        //
        newNum += temp % 10;
        //
        temp /= 10;
      }

      //
      if (newNum < res)
        res = newNum;
    }

    //
    return res;
  }
}
