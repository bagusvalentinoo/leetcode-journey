/**
 * Problem: 1614. Maximum Nesting Depth of the Parentheses
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxDepth(string s)
  {
    // Track current depth and deepest depth seen so far
    int currentDepth = 0, maxDepthValue = 0;

    // Scan each character in the string
    foreach (char character in s)
    {
      // Opening parenthesis deepens nesting and may set a new maximum
      if (character == '(') maxDepthValue = Math.Max(maxDepthValue, ++currentDepth);
      // Closing parenthesis reduces the current nesting level
      else if (character == ')') --currentDepth;
    }

    // Return the deepest nesting level encountered
    return maxDepthValue;
  }
}
