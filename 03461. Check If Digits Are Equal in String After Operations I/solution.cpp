/**
 * Problem: 3461. Check If Digits Are Equal in String After Operations I
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool hasSameDigits(string s) {
    // Continue reducing the string until only 2 characters remain
    while (s.size() != 2) {
      // Update each character with sum of adjacent characters modulo 10
      for (int i = 0; i < s.size() - 1; i++)
        s[i] = (s[i] + s[i + 1]) % 10;

      // Remove the last character after each iteration
      s.pop_back();

      // Check if we have exactly 2 characters and they are equal
      if (s.size() == 2 && s[0] == s[1])
        return true;
    }

    // Return false if final two characters are not equal
    return false;
  }
};
