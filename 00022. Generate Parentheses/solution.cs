/**
 * Problem: 22. Generate Parentheses
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<string> GenerateParenthesis(int n)
  {
    // Store all valid combinations
    List<string> result = new List<string>();

    // Build combinations by tracking open and close counts
    Backtrack(result, "", 0, 0, n);

    // Return all valid combinations
    return result;
  }

  private void Backtrack(List<string> result, string current, int open, int close, int max)
  {
    // Add complete string once all pairs are used
    if (current.Length == 2 * max)
    {
      result.Add(current);
      return;
    }

    // Add open parenthesis while pairs remain
    if (open < max) Backtrack(result, current + "(", open + 1, close, max);
    // Add close parenthesis only when it keeps the string valid
    if (close < open) Backtrack(result, current + ")", open, close + 1, max);
  }
}
