/**
 * Problem: 2278. Percentage of Letter in String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int PercentageLetter(string s, char letter)
  {
    // Count matching occurrences of the target letter
    int count = 0;

    // Iterate through characters of the string
    foreach (char ch in s)
    {
      // Increment counter if current character equals target letter
      if (ch == letter) count++;
    }

    // Calculate percentage rounded down via integer division
    return (count * 100) / s.Length;
  }
}
