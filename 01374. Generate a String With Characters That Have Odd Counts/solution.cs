/**
 * Problem: 1374. Generate a String With Characters That Have Odd Counts
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string GenerateTheString(int n)
  {
    // Create a span of characters with length n
    Span<char> characters = stackalloc char[n];

    // Fill all positions with 'a'
    for (int i = 0; i < n; i++)
      characters[i] = 'a';

    // If n is even, change the last character to 'b'
    if ((n & 1) == 0)
      characters[^1] = 'b';

    // Convert span to string and return
    return characters.ToString();
  }
}
