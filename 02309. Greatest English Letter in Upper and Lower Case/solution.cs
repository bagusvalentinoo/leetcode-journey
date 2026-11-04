/**
 * Problem: 2309. Greatest English Letter in Upper and Lower Case
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string GreatestLetter(string s)
  {
    // Define alphabet with lowercase letters followed by uppercase letters
    string alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Track index of greatest letter occurring in both lowercase and uppercase
    int max = -1;

    // Check each English letter from 'a'/'A' to 'z'/'Z'
    for (int i = 0; i < 26; i++)
    {
      // Update max index if both lowercase and uppercase forms are present
      if (s.Contains(alphabet[i]) && s.Contains(alphabet[i + 26])) max = i;
    }

    // Return uppercase letter corresponding to max index, or empty string if none found
    return max == -1 ? "" : $"{alphabet[max + 26]}";
  }
}
