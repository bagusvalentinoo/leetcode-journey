/**
 * Problem: 1995. Count Special Quadruplets
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountQuadruplets(int[] nums)
  {
    // Initialize counter for valid quadruplets and store array length for loop boundaries
    int count = 0, n = nums.Length;
    // Frequency table for differences nums[d] - nums[c], indexed directly since values are bounded
    Span<int> diffFreq = stackalloc int[101];

    // Iterate middle index b backwards to accumulate difference pairs incrementally
    for (int b = n - 3; b >= 1; b--)
    {
      // Fix c as the index just after b
      int c = b + 1;

      // Add all differences ending at c into the frequency table
      for (int d = c + 1; d < n; d++)
      {
        // Compute difference for indices c and d
        int diff = nums[d] - nums[c];

        // Record only non-negative differences that can match a pair sum
        if (diff >= 0) diffFreq[diff]++;
      }

      // Match every pair sum ending at b against known differences
      for (int a = 0; a < b; a++)
      {
        // Compute pair sum for indices a and b
        int sum = nums[a] + nums[b];

        // Add frequency of the matching difference to the result
        if (sum <= 100) count += diffFreq[sum];
      }
    }

    // Return total count of special quadruplets
    return count;
  }
}
