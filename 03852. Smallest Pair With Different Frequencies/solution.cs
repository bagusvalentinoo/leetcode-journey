/**
 * Problem: 3852. Smallest Pair With Different Frequencies
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] MinDistinctFreqPair(int[] nums)
  {
    // Allocate frequency array on stack for performance (numbers 1-100)
    Span<int> frequencies = stackalloc int[101];

    // Count occurrences of each number
    foreach (var x in nums)
      frequencies[x]++;

    // Get array length
    var n = nums.Length;

    // Iterate through each number
    for (var x = 1; x < 101; x++)
    {
      // Get frequency of current number
      var freqX = frequencies[x];

      // Skip if number doesn't exist in array
      if (0 == freqX)
        continue;

      // Compare with all subsequent numbers
      for (var y = x + 1; y < 101; y++)
      {
        // Get frequency of second number
        var freqY = frequencies[y];

        // Skip if number doesn't exist or frequencies are equal
        if (0 == freqY || freqX == freqY)
          continue;

        // Found pair with different frequencies
        return [x, y];
      }
    }

    // No valid pair found
    return [-1, -1];
  }
}
