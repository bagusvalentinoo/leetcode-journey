/**
 * Problem: 678. Valid Parenthesis String
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool checkValidString(string s) {
    // Minimum and Maximum possible open parentheses balance
    int low = 0, high = 0;

    // Process each character
    for (char c : s) {
      // Open parenthesis increases both bounds
      if (c == '(')
        low++, high++;
      // Close parenthesis decreases both bounds
      else if (c == ')')
        low--, high--;
      // Star can be '(', ')' or empty: decrease low, increase high
      else
        low--, high++;

      // Too many closing parentheses in every interpretation
      if (high < 0)
        return false;
      // Clamp low to zero since negative balance means treating stars as empty
      if (low < 0)
        low = 0;
    }

    // Valid only if zero balance is reachable
    return low == 0;
  }
};
