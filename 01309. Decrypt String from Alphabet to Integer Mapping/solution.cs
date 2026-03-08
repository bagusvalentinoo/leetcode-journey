/**
 * Problem: 1309. Decrypt String from Alphabet to Integer Mapping
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string FreqAlphabets(string s)
  {
    // List to store decoded characters
    var result = new List<char>();

    // Process the string from right to left
    for (int i = s.Length - 1; i >= 0; i--)
    {
      // Variable to store the number (1-26)
      int number;

      // Check if current position is part of a two-digit number with '#'
      if (s[i] == '#')
      {
        // Extract two-digit number (positions i-2 and i-1)
        number = 10 * (s[i - 2] - '0') + (s[i - 1] - '0');
        // Skip the two digits we just processed
        i -= 2;
      }
      else
        // Single digit number
        number = s[i] - '0';

      // Convert number to corresponding letter (a=1, b=2, ..., z=26)
      result.Add((char)('a' + number - 1));
    }

    // Reverse to get correct order (since we processed from right to left)
    result.Reverse();

    // Return as string
    return new string(result.ToArray());
  }
}
