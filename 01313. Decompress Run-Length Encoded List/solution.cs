/**
 * Problem: 1313. Decompress Run-Length Encoded List
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

using System.Runtime.CompilerServices;

public class Solution
{
  [MethodImpl(MethodImplOptions.AggressiveOptimization)]
  public int[] DecompressRLElist(int[] nums)
  {
    // Calculate total length needed for result array
    int totalLength = 0;

    // Sum all frequencies
    for (int i = 0; i < nums.Length; i += 2)
      totalLength += nums[i];

    // Pre-allocate result array with exact size needed
    int[] result = new int[totalLength];
    // Index to keep track of current position in result array
    int resultIndex = 0;

    // Process each frequency-value pair
    for (int i = 0; i < nums.Length; i += 2)
    {
      // How many times to repeat
      int frequency = nums[i];
      // Value to repeat
      int value = nums[i + 1];

      // Add value 'frequency' times to result array
      for (int j = 0; j < frequency; j++)
        result[resultIndex++] = value;
    }

    // Return fully decompressed list
    return result;
  }
}
