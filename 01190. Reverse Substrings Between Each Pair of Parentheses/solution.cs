/**
 * Problem: 1190. Reverse Substrings Between Each Pair of Parentheses
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string ReverseParentheses(string s)
  {
    // Store matching parenthesis index for each bracket position
    int[] pair = new int[s.Length];

    // Stack tracks indices of open parentheses awaiting a match
    Stack<int> stack = new Stack<int>();

    // Build pair mapping between open and close parentheses
    for (int i = 0; i < s.Length; i++)
    {
      // Push open parenthesis index for later matching
      if (s[i] == '(') stack.Push(i);

      // On close parenthesis link both positions together
      if (s[i] == ')')
      {
        // Pop matching open index
        int openIndex = stack.Pop();

        // Link close to open and open to close
        pair[i] = openIndex;
        pair[openIndex] = i;
      }
    }

    // Builder holds final result without parentheses
    StringBuilder result = new StringBuilder();

    // Traverse string forward, flipping direction at each parenthesis
    for (int i = 0, direction = 1; i < s.Length; i += direction)
    {
      // On parenthesis jump to its pair and reverse traversal direction
      if (s[i] == '(' || s[i] == ')')
      {
        i = pair[i];
        direction = -direction;
      }
      // On letter append it to the result
      else result.Append(s[i]);
    }

    // Return the built string with all brackets removed
    return result.ToString();
  }
}
