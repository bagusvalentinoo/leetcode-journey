/**
 * Problem: 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string modifyString(string s) {
    // Iterate through each position
    for (int i = 0; i < (int)s.size(); i++) {
      // Process only '?' placeholders
      if (s[i] != '?')
        continue;

      // Try candidate letters a, b, c to find valid replacement
      for (char c = 'a'; c <= 'c'; c++) {
        // Check left neighbor is different (already replaced if it was '?')
        bool leftOk = i == 0 || s[i - 1] != c;

        // Check right neighbor is different (skip if right is '?' placeholder)
        bool rightOk = i == (int)s.size() - 1 || s[i + 1] != c;

        // Pick first candidate satisfying both neighbors
        if (leftOk && rightOk) {
          // Assign valid replacement
          s[i] = c;
          break;
        }
      }
    }

    // Return modified string
    return s;
  }
};
