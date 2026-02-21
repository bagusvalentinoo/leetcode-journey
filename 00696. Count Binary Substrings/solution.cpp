/**
 * Problem: 696. Count Binary Substrings
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countBinarySubstrings(string s) {
    // Initialize result counter
    int result = 0;

    // Track previous group length and current streak count
    int prevGroupLength = 0;
    int currentStreak = 1;

    // Iterate through string starting from second character
    for (int i = 1; i < s.size(); i++) {
      if (s[i] == s[i - 1]) {
        // Extend current streak of identical characters
        currentStreak++;
      } else {
        // Group changed: move current to previous, start new streak
        prevGroupLength = currentStreak;
        currentStreak = 1;
      }

      // If current streak is shorter or equal to previous group
      // we can form a valid substring
      if (currentStreak <= prevGroupLength)
        result++;
    }

    return result;
  }
};
