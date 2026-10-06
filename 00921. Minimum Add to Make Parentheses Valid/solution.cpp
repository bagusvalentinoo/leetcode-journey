/**
 * Problem: 921. Minimum Add to Make Parentheses Valid
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minAddToMakeValid(string s) {
    // Counter for unmatched open and close parentheses
    int openCount = 0, closeCount = 0;

    // Iterate through each character in the string
    for (char c : s) {
      // If open parenthesis, increment open counter
      if (c == '(')
        openCount++;
      // If close parenthesis and open available, match it
      else if (openCount > 0)
        openCount--;
      // If no open available, need an open insertion
      else
        closeCount++;
    }

    // Return total insertions for unmatched opens and closes
    return openCount + closeCount;
  }
};
