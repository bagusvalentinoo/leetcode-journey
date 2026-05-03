/**
 * Problem: 796. Rotate String
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool rotateString(string s, string goal) {
    // Return true if the lengths are equal and the goal is a substring of the
    // doubled string
    return s.length() == goal.length() && (s + s).find(goal) != string::npos;
  }
};
