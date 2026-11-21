/**
 * Problem: 2108. Find First Palindromic String in the Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string FirstPalindrome(string[] words)
  {
    // Check each word in its original order
    foreach (string word in words)
    {
      // Compare characters from both ends toward the center
      int left = 0, right = word.Length - 1;

      while (left < right && word[left] == word[right])
      {
        left++;
        right--;
      }

      // Return the first word whose characters all match
      if (left >= right) return word;
    }

    // Return an empty string when no palindrome exists
    return "";
  }
}
