/**
 * Problem: 1608. Special Array With X Elements Greater Than or Equal X
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int SpecialArray(int[] nums)
  {
    // Initialize binary search bounds for candidate x
    int left = 1,
        right = nums.Length;

    // Binary search over candidate x values
    while (left <= right)
    {
      // Compute middle candidate and reset qualifying count
      int middle = (left + right) / 2,
          count = 0;

      // Scan array and count qualifying elements
      foreach (int currentNumber in nums)
        // Increment count when element meets threshold
        if (currentNumber >= middle) count++;

      // Return middle when count matches exactly
      if (count == middle) return middle;

      // Shrink to lower half when too few elements qualify
      if (count < middle) right = middle - 1;
      // Expand to upper half when too many elements qualify
      else left = middle + 1;
    }

    // No candidate matched so array is not special
    return -1;
  }
}
