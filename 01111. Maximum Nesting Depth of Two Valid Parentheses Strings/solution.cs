/**
 * Problem: 1111. Maximum Nesting Depth of Two Valid Parentheses Strings
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] MaxDepthAfterSplit(string seq)
  {
    // Store assignment for each character
    int[] answer = new int[seq.Length];

    // Track current nesting depth
    int depth = 0;

    // Assign each parenthesis by depth parity
    for (int i = 0; i < seq.Length; i++)
    {
      // Opening bracket takes current depth parity, then goes deeper
      if (seq[i] == '(')
      {
        // Assign current depth parity to this opening bracket
        answer[i] = depth % 2;
        // Increase depth for nested characters
        depth++;
      }
      else
      {
        // Decrease depth as this bracket closes a level
        depth--;
        // Assign restored depth parity to this closing bracket
        answer[i] = depth % 2;
      }
    }

    // Return assignment minimizing max depth of both groups
    return answer;
  }
}
