/**
 * Problem: 1598. Crawler Log Folder
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinOperations(string[] logs)
  {
    // Track current depth from main folder
    int depth = 0;

    // Process each log operation
    foreach (string log in logs)
    {
      // Stay in same folder: no depth change
      if (log == "./") continue;
      // Move to parent: decrement depth but never below main folder
      else if (log == "../") depth = Math.Max(0, depth - 1);
      // Move to child folder: increment depth
      else depth++;
    }

    // Return depth as operations needed to go back to main folder
    return depth;
  }
}
