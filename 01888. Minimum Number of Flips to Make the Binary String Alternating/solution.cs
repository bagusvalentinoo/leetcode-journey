/**
 * Problem: 1888. Minimum Number of Flips to Make the Binary String Alternating
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

public class Solution
{
  public int MinFlips(string s)
  {
    // Count flips needed when starting with '0' at position 0
    int flipsForPattern0 = 0;
    for (int i = 0; i < s.Length; i++)
    {
      if (i % 2 == 1)
      {
        // Odd positions should be '1'
        if (s[i] == '0')
          flipsForPattern0++;
      }
      else
      {
        // Even positions should be '0'
        if (s[i] == '1')
          flipsForPattern0++;
      }
    }

    // Flips needed for opposite pattern (starting with '1')
    int flipsForPattern1 = s.Length - flipsForPattern0;
    int minFlips = Math.Min(flipsForPattern0, flipsForPattern1);

    bool isEvenLength = s.Length % 2 == 0;

    // Slide window by removing first character and treating as new start
    for (int i = 1; i < s.Length; i++)
    {
      // Remove effect of character at i-1 from counts
      if (s[i - 1] == '1')
        flipsForPattern0--;
      else
        flipsForPattern1--;

      // Swap patterns (rotation effect)
      int temp = flipsForPattern0;
      flipsForPattern0 = flipsForPattern1;
      flipsForPattern1 = temp;

      // Add back character at i-1 with appropriate pattern
      if (isEvenLength)
      {
        // If length is even, first character of new window is at even position
        if (s[i - 1] == '1')
          flipsForPattern1++;
        else
          flipsForPattern0++;
      }
      else
      {
        // If length is odd, first character of new window is at odd position
        if (s[i - 1] == '1')
          flipsForPattern0++;
        else
          flipsForPattern1++;
      }

      // Update minimum flips
      minFlips = Math.Min(flipsForPattern0, Math.Min(flipsForPattern1, minFlips));
    }

    // If the length is even, the first character of the new window
    // will be at an even position
    return minFlips;
  }
}
