/**
 * Problem: 1736. Latest Time by Replacing Hidden Digits
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string MaximumTime(string time)
  {
    // Convert time string into mutable character array
    char[] chars = time.ToCharArray();

    // Fill first hour digit with largest valid value
    if (chars[0] == '?') chars[0] = chars[1] == '?' || chars[1] <= '3' ? '2' : '1';
    // Fill second hour digit with largest value allowed by first digit
    if (chars[1] == '?') chars[1] = chars[0] == '2' ? '3' : '9';
    // Fill tens of minutes with largest valid value
    if (chars[3] == '?') chars[3] = '5';
    // Fill ones of minutes with largest valid value
    if (chars[4] == '?') chars[4] = '9';

    // Build latest valid time string from characters
    return new string(chars);
  }
}
