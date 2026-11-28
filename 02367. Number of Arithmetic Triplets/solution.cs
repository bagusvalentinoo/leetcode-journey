/**
 * Problem: 2367. Number of Arithmetic Triplets
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int ArithmeticTriplets(int[] nums, int diff)
  {
    // Track previously seen values within the bounded input range
    Span<bool> cache = stackalloc bool[201];

    // Count valid arithmetic triplets
    int res = 0;

    // Process values in increasing order
    foreach (int val in nums)
    {
      // Count a triplet when both preceding values have already appeared
      if (val - 2 * diff >= 0 && cache[val - 2 * diff] && cache[val - diff]) res++;

      // Mark the current value as available for later triplets
      cache[val] = true;
    }

    // Return the number of valid arithmetic triplets
    return res;
  }
}
