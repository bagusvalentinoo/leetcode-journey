/**
 * Problem: 2215. Find the Difference of Two Arrays
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<IList<int>> FindDifference(int[] nums1, int[] nums2)
  {
    // Track each value in the supported range for both arrays
    var foundNums1 = new int[2001];
    var foundNums2 = new int[2001];

    // Mark values present in the first array
    for (var i = 0; i < nums1.Length; i++)
    {
      var index = nums1[i] + 1000;
      foundNums1[index] = 1;
    }

    // Mark values present in the second array
    for (var i = 0; i < nums2.Length; i++)
    {
      var index = nums2[i] + 1000;
      foundNums2[index] = 1;
    }

    // Store values unique to each array
    var firstDifference = new List<int>();
    var secondDifference = new List<int>();

    // Compare every value in the supported range
    for (var i = 0; i < 2001; i++)
    {
      if (foundNums1[i] == 1 && foundNums2[i] == 0)
        firstDifference.Add(i - 1000);
      else if (foundNums2[i] == 1 && foundNums1[i] == 0)
        secondDifference.Add(i - 1000);
    }

    // Return the values unique to each array
    return new List<IList<int>> { firstDifference, secondDifference };
  }
}
