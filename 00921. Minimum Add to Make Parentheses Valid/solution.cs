/**
 * Problem: 921. Minimum Add to Make Parentheses Valid
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinAddToMakeValid(string s)
  {
    // Counter for unmatched open and close parentheses
    int open = 0, close = 0;

    // Iterate through each character in the string
    foreach (char c in s)
    {
      // If open parenthesis, increment open counter
      if (c == '(') open++;
      // If close parenthesis and open available, match it
      else if (open > 0) open--;
      // If no open available, need an open insertion
      else close++;
    }

    // Return total insertions for unmatched opens and closes
    return open + close;
  }
}
