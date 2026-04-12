/**
 * Problem: 58. Length of Last Word
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int lengthOfLastWord(string s) {
    // Initialize counter for word length
    int length = 0;

    // Start from the end of the string
    int i = s.length() - 1;

    // Skip trailing spaces
    while (i >= 0 && s[i] == ' ')
      i--;

    // Count characters of the last word
    while (i >= 0 && s[i] != ' ') {
      // Increment length counter
      length++;
      // Decrement index
      i--;
    }

    return length;
  }
};
