/**
 * Problem: 2124. Check if All A's Appears Before All B's
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool checkString(string s) {
    // Return whether the invalid adjacent ordering is absent
    return s.find("ba") == string::npos;
  }
};
