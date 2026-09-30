/**
 * Problem: 1111. Maximum Nesting Depth of Two Valid Parentheses Strings
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> maxDepthAfterSplit(string seq) {
    // Store assignment for each character
    vector<int> answer(seq.size());
    // Track current nesting depth
    int depth = 0;

    // Assign each parenthesis by depth parity
    for (size_t i = 0; i < seq.size(); i++) {
      // Opening bracket takes current depth parity, then goes deeper
      if (seq[i] == '(') {
        // Assign current depth parity to this opening bracket
        answer[i] = depth % 2;
        // Increase depth for nested characters
        depth++;
      } else {
        // Decrease depth as this bracket closes a level
        depth--;
        // Assign restored depth parity to this closing bracket
        answer[i] = depth % 2;
      }
    }

    // Return assignment minimizing max depth of both groups
    return answer;
  }
};
