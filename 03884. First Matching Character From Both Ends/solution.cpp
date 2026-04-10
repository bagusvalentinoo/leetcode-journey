/**
 * Problem: 3884. First Matching Character From Both Ends
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int firstMatchingIndex(string s) {
    // Get string length
    int length = s.length();

    // Iterate through each character from start to middle
    for (int i = 0; i < length; i++) {
      // Get character at current position and its mirror position
      char leftChar = s[i], rightChar = s[length - i - 1];

      // If characters match, return current index
      if (leftChar == rightChar)
        return i;
    }

    // No matching pair found
    return -1;
  }
};
