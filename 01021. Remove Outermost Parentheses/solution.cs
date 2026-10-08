/**
 * Problem: 1021. Remove Outermost Parentheses
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string RemoveOuterParentheses(string s)
  {
    // Preallocate buffer for inner parentheses
    var buffer = new char[s.Length];

    // Group related counters for result length and nesting depth
    int length = 0, depth = 0;

    // Iterate through each character in the string
    foreach (char c in s)
    {
      // Handle opening parenthesis
      if (c == '(')
      {
        // Keep non-outermost opening parenthesis and advance depth
        if (depth++ > 0) buffer[length++] = c;
      }
      // Handle closing parenthesis
      else
      {
        // Retreat depth first and keep non-outermost closing parenthesis
        if (--depth > 0) buffer[length++] = c;
      }
    }

    // Build result string from buffered characters
    return new string(buffer, 0, length);
  }
}
