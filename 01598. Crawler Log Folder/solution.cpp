/**
 * Problem: 1598. Crawler Log Folder
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minOperations(vector<string> &logs) {
    // Track current depth from main folder
    int depth = 0;

    // Process each log operation
    for (string &log : logs) {
      // Stay in same folder: no depth change
      if (log == "./")
        continue;
      // Move to parent: decrement depth but never below main folder
      else if (log == "../")
        depth = max(0, depth - 1);
      // Move to child folder: increment depth
      else
        depth++;
    }

    // Return depth as operations needed to go back to main folder
    return depth;
  }
};
