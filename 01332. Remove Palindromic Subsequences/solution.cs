/**
 * Problem: 1332. Remove Palindromic Subsequences
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int RemovePalindromeSub(string s)
  {
    // Return 0 if the string is empty
    if (s.Length == 0)
      return 0;

    // Two pointers to check if the string is a palindrome
    int left = 0, right = s.Length - 1;

    // Check if all symmetric characters match
    while (left < right)
      if (s[left++] != s[right--])
        return 2;

    // Return 1 if the string is already a palindrome
    return 1;
  }
}
