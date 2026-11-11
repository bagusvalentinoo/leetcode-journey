/**
 * Problem: 2351. First Letter to Appear Twice
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public char RepeatedCharacter(string s)
  {
    // Track characters encountered while scanning from left to right
    HashSet<char> seen = new HashSet<char>();

    // Return immediately when a character has already been seen
    foreach (char character in s)
    {
      if (seen.Contains(character)) return character;

      // Record the character's first occurrence
      seen.Add(character);
    }

    // The constraints guarantee that a repeated character exists
    return '\0';
  }
}
