/**
 * Problem: 1822. Sign of the Product of an Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int ArraySign(int[] nums)
  {
    // Count negative numbers to determine product sign
    int negativeCount = 0;

    // Iterate through each number in the array
    foreach (int currentNumber in nums)
    {
      // If any element is zero the product is zero
      if (currentNumber == 0) return 0;
      // Count negative numbers
      if (currentNumber < 0) negativeCount++;
    }

    // Return -1 for odd negatives, 1 for even negatives
    return negativeCount % 2 == 0 ? 1 : -1;
  }
}
