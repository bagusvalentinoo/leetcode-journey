/**
 * Problem: 2315. Count Asterisks
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountAsterisks(string s)
  {
    // Track whether the current character is inside a pair of vertical bars
    bool isInsideBars = false;
    // Store the number of asterisks outside bar pairs
    int count = 0;

    // Process each character in the string
    foreach (char character in s)
    {
      // Toggle the bar-pair state when reaching a vertical bar
      if (character == '|') isInsideBars = !isInsideBars;
      // Count asterisks only when they are outside a bar pair
      if (character == '*' && !isInsideBars) count++;
    }

    // Return the number of valid asterisks
    return count;
  }
}
