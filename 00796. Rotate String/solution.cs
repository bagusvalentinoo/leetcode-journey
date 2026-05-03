/**
 * Problem: 796. Rotate String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool RotateString(string s, string goal)
  {
    // Return true if the lengths are equal and the goal is a substring of the doubled string
    return s.Length == goal.Length && (s + s).Contains(goal);
  }
}
