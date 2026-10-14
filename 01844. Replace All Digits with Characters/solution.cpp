/**
 * Problem: 1844. Replace All Digits with Characters
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string replaceDigits(string s) {
    // Store string length for loop boundary
    int n = s.size();

    // Process every odd index to replace digits
    for (int i = 1; i < n; i += 2)
      // Shift previous character forward by digit value
      s[i] = s[i - 1] + s[i] - '0';

    // Return the string after replacing all digits
    return s;
  }
};
