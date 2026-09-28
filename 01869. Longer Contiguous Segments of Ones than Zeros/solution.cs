/**
 * Problem: 1869. Longer Contiguous Segments of Ones than Zeros
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool CheckZeroOnes(string s)
  {
    // Track longest segments found for each character
    int maxOnes = 0, maxZeros = 0;

    // Track current running segment lengths
    int currentOnes = 0, currentZeros = 0;

    // Scan each character in the binary string
    foreach (char ch in s)
    {
      // Extend ones run and reset zeros run
      if (ch == '1')
      {
        // Increment current ones streak
        currentOnes++;

        // Reset zeros streak
        currentZeros = 0;

        // Update longest ones segment
        if (currentOnes > maxOnes) maxOnes = currentOnes;
      }
      else
      {
        // Increment current zeros streak
        currentZeros++;

        // Reset ones streak
        currentOnes = 0;

        // Update longest zeros segment
        if (currentZeros > maxZeros) maxZeros = currentZeros;
      }
    }

    // Longest ones segment must be strictly longer than longest zeros segment
    return maxOnes > maxZeros;
  }
}
