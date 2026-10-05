/**
 * Problem: 856. Score of Parentheses
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int scoreOfParentheses(string s) {
    // Total score accumulated from each primitive pair and current nesting
    // depth
    int answer = 0, depth = 0;

    // Iterate through each character in the string
    for (int i = 0; i < s.size(); i++) {
      // If opening bracket, go one level deeper
      if (s[i] == '(')
        depth++;
      // If closing bracket, come back up one level
      else {
        // Decrease depth as current pair is closed
        depth--;

        // If previous char was opening, found primitive () contributing 2^depth
        if (s[i - 1] == '(')
          answer += 1 << depth;
      }
    }

    // Return the total computed score
    return answer;
  }
};
