/**
 * Problem: 1758. Minimum Changes To Make Alternating Binary String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinOperations(string s)
  {
    // Count differences when starting with '0' at even positions
    int differences = 0;

    // Check each character position
    for (int i = 0; i < s.Length; i++)
      // Expected character based on position parity
      // Even positions: '0', Odd positions: '1'
      // '0' + (i % 2) gives ASCII 48 for even, 49 for odd
      differences += (s[i] == '0' + (i % 2)) ? 1 : 0;

    // Minimum between starting with '0' at even vs '1' at even
    return Math.Min(differences, s.Length - differences);
  }
}
