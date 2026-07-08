/**
 * Problem: 2396. Strictly Palindromic Number
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool IsStrictlyPalindromic(int n)
  {
    // For any n >= 4, it's impossible to be strictly palindromic
    if (n >= 4) return false;

    // For n < 4, check base cases
    // n = 1: true (trivially palindromic)
    // n = 2: true (trivially palindromic)
    // n = 3: true (trivially palindromic)
    return true;
  }
}
