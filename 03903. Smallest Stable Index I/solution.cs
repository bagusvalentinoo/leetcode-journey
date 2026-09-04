/**
 * Problem: 3903. Smallest Stable Index I
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int FirstStableIndex(int[] nums, int k)
  {
    // Get array length for iteration bounds
    int n = nums.Length;

    // Build suffix minimum array: suffixMin[i] = min(nums[i..n-1])
    int[] suffixMin = new int[n];

    // Last element suffix min is itself
    suffixMin[n - 1] = nums[n - 1];

    // Fill suffix minima from right to left
    for (int i = n - 2; i >= 0; i--) suffixMin[i] = Math.Min(suffixMin[i + 1], nums[i]);

    // Track prefix maximum while scanning left to right
    int prefixMax = 0;

    // Check each index for stability condition
    for (int i = 0; i < n; i++)
    {
      // Update prefix maximum to include current element
      prefixMax = Math.Max(prefixMax, nums[i]);

      // Compute instability score and check against k
      if (prefixMax - suffixMin[i] <= k) return i;
    }

    // No stable index found
    return -1;
  }
}
