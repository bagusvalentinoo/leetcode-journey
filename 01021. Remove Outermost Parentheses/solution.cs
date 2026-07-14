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
    // StringBuilder to efficiently build result string
    StringBuilder result = new StringBuilder();

    // Track current nesting depth
    int depth = 0;

    // Iterate through each character in the string
    foreach (char c in s)
    {
      // If character is an opening parenthesis
      if (c == '(')
      {
        // Add to result if not the outermost parenthesis (depth > 0)
        if (depth > 0)
          result.Append(c);

        // Increment depth for nested parentheses
        depth++;
      }
      // If character is a closing parenthesis
      else
      {
        // Decrement depth first (this closing parenthesis closes current level)
        depth--;

        // Add to result if not closing the outermost parenthesis (depth > 0)
        if (depth > 0)
          result.Append(c);
      }
    }

    // Return the resulting string with outermost parentheses removed
    return result.ToString();
  }
}
