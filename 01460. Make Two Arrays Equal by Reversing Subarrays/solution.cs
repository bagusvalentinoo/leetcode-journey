/**
 * Problem: 1460. Make Two Arrays Equal by Reversing Subarrays
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool CanBeEqual(int[] target, int[] arr)
  {
    // Stack-allocated frequency array for numbers 0-1000
    Span<int> targetFrequency = stackalloc int[1001];

    // Count occurrences of each number in target array
    foreach (int num in target) targetFrequency[num]++;

    // Verify each number in arr has matching frequency in target
    foreach (int num in arr)
    {
      // If number not found in target or frequency exhausted, arrays differ
      if (targetFrequency[num] == 0) return false;

      // Decrement frequency for this number
      targetFrequency[num]--;
    }

    // All elements matched successfully
    return true;
  }
}
