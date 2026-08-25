/**
 * Problem: 3718. Smallest Missing Multiple of K
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MissingMultiple(int[] nums, int k)
  {
    // Initialize bit array to track presence of numbers up to constraint
    BitArray b = new BitArray(101);

    // Mark numbers present in nums as true
    for (int i = 0; i < nums.Length; i++)
      b[nums[i]] = true;

    // Track current multiple of k
    int nk = 0;

    // Search for the smallest missing positive multiple of k
    while (true)
    {
      // Increment to the next multiple of k
      nk += k;

      // Return multiple if it exceeds max value or is missing from array
      if (nk > 100 || !b[nk]) return nk;
    }
  }
}
