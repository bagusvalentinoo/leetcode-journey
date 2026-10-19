/**
 * Problem: 2089. Find Target Indices After Sorting Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<int> TargetIndices(int[] nums, int target)
  {
    // Count values that appear before and equal to the target after sorting
    int smallerCount = 0;
    int targetCount = 0;

    // Inspect every value to determine the target's sorted range
    foreach (int number in nums)
    {
      if (number < target) smallerCount++;
      if (number == target) targetCount++;
    }

    // Store each index occupied by the target values
    List<int> indices = new List<int>();

    // Add the consecutive indices that start after smaller values
    for (int index = 0; index < targetCount; index++) indices.Add(smallerCount + index);

    // Return the target indices in increasing order
    return indices;
  }
}
