/**
 * Problem: 2108. Find First Palindromic String in the Array
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string firstPalindrome(vector<string> &words) {
    // Check each word in its original order
    for (const string &word : words) {
      // Compare characters from both ends toward the center
      int left = 0, right = word.length() - 1;

      while (left < right && word[left] == word[right]) {
        left++;
        right--;
      }

      // Return the first word whose characters all match
      if (left >= right)
        return word;
    }

    // Return an empty string when no palindrome exists
    return "";
  }
};
