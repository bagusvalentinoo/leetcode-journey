/**
 * Problem: 1190. Reverse Substrings Between Each Pair of Parentheses
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string reverseParentheses(string s) {
    // Stack stores outer string segments for each open parenthesis
    vector<string> stack;

    // Current segment being built outside or inside parentheses
    string current;

    // Process each character
    for (char ch : s) {
      // On open parenthesis save current segment and start a fresh one
      if (ch == '(') {
        stack.push_back(current);
        current.clear();
      }
      // On close parenthesis reverse current segment and append to outer one
      else if (ch == ')') {
        reverse(current.begin(), current.end());
        current = stack.back() + current;
        stack.pop_back();
      }
      // On letter append it to the current segment
      else current += ch;
    }

    // Return the fully built string with all brackets removed
    return current;
  }
};
