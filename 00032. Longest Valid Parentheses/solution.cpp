/**
 * Problem: 32. Longest Valid Parentheses
 *
 * Difficulty: Hard
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int longestValidParentheses(string s) {
    // Stack to track positions, initialized with -1 to handle edge cases
    vector<int> positionStack = {-1};

    // Tracks the maximum length of valid parentheses found
    int maxLength = 0;

    // Iterate through each character position
    for (int index = 0; index < (int)s.size(); index++) {
      // Push opening parenthesis position to stack
      if (s[index] == '(')
        positionStack.push_back(index);
      else {
        // Pop for closing parenthesis
        positionStack.pop_back();

        // If stack is empty, push current position as new reference point
        if (positionStack.empty())
          positionStack.push_back(index);
        // Calculate length between current position and last position in stack
        else
          maxLength = max(maxLength, index - positionStack.back());
      }
    }

    // Return the maximum length found
    return maxLength;
  }
};
