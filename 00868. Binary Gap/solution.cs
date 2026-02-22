/**
 * Problem: 868. Binary Gap
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int BinaryGap(int n)
  {
    // Convert number to binary string
    string binary = Convert.ToString(n, 2);

    // Track maximum gap between consecutive 1's
    int maxGap = 0;
    // Track index of previous 1
    int prevIndex = -1;

    // Iterate through each character in binary string
    for (int i = 0; i < binary.Length; i++)
    {
      if (binary[i] == '1')
      {
        // Calculate gap if this is not the first 1
        if (prevIndex != -1)
          maxGap = Math.Max(maxGap, i - prevIndex);

        // Update previous index
        prevIndex = i;
      }
    }

    // Return maximum gap
    return maxGap;
  }
}
