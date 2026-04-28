/**
 * Problem: 3407. Substring Matching Pattern
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool HasMatch(string s, string p)
  {
    // Initialize positions for string, pattern, and start of pattern segment
    int stringPosition = 0,
      patternPosition = 0,
      startPatternPosition = 0;

    // Process pattern in two segments (before and after '*')
    for (int segment = 0; segment < 2; segment++)
    {
      // Reset pattern position to start of current segment
      patternPosition = startPatternPosition;

      // Try to match current pattern segment starting from current string position
      while (stringPosition + patternPosition < s.Length)
      {
        // If current pattern character is wildcard '*'
        if (p[patternPosition] == '*')
        {
          // If '*' is at the end of pattern, remaining string can match anything
          if (patternPosition == p.Length - 1)
            return true;

          // Backtrack one position to allow wildcard to match more characters
          stringPosition--;

          // Exit loop to move to next segment
          break;
        }

        // If characters match
        if (s[stringPosition + patternPosition] == p[patternPosition])
        {
          // Move to next pattern character
          patternPosition++;

          // If we've matched entire pattern, success
          if (patternPosition == p.Length)
            return true;
          // If we're at the last character and it's '*', wildcard matches rest
          if (patternPosition == (p.Length - 1) && p[patternPosition] == '*')
            return true;

          // Continue with next character
          continue;
        }

        // Characters don't match, move string position forward and reset pattern
        stringPosition++;
        patternPosition = startPatternPosition;
      }

      // If we ran out of string before finding match for current segment
      if (stringPosition + patternPosition >= s.Length)
        return false;

      // Move to next segment (after '*')
      startPatternPosition = patternPosition + 1;
    }

    // No valid match found
    return false;
  }
}
