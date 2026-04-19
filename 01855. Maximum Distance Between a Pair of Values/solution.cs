/**
 * Problem: 1855. Maximum Distance Between a Pair of Values
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxDistance(int[] nums1, int[] nums2)
  {
    // Track maximum valid distance found
    int maxDist = 0;

    // Initialize pointers for both arrays
    int i = 0,
      j = 0;

    // Iterate while both pointers are within bounds
    while (i < nums1.Length && j < nums2.Length)
    {
      // Check if condition is satisfied (nums1[i] <= nums2[j])
      if (nums1[i] <= nums2[j])
      {
        // Update maximum distance with current index difference
        maxDist = Math.Max(maxDist, j - i);
        // Expand window by moving right pointer
        j++;
      }
      // If condition fails, move left pointer forward
      else
        i++;
    }

    // Return the maximum valid distance found
    return maxDist;
  }
}
