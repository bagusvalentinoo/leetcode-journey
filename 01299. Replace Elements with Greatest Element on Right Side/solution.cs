/**
 * Problem: 1299. Replace Elements with Greatest Element on Right Side
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] ReplaceElements(int[] arr)
  {
    // Handle null input
    if (arr == null)
      return arr;

    // Track maximum value seen from the right
    int maxRight = -1;

    // Traverse array from right to left
    for (int i = arr.Length - 1; i >= 0; i--)
    {
      // Store current value before overwriting
      int current = arr[i];

      // Replace current element with max from its right
      arr[i] = maxRight;

      // Update maxRight for next iteration (elements to the left)
      maxRight = maxRight > current ? maxRight : current;
    }

    // Return the modified array
    return arr;
  }
}
