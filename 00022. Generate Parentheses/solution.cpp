/**
 * Problem: 22. Generate Parentheses
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<string> generateParenthesis(int n) {
    // Store all valid combinations
    vector<string> ans;

    // Build combinations starting from empty string
    string sub;

    // Explore combinations by tracking open and close counts
    helper(0, 0, n, sub, ans);

    // Return all valid combinations
    return ans;
  }

private:
  void helper(int open, int close, int n, string &sub, vector<string> &ans) {
    // Add complete string once all pairs are used
    if ((int)sub.size() == 2 * n) {
      ans.push_back(sub);
      return;
    }

    // Add open parenthesis while pairs remain
    if (open < n) {
      sub.push_back('(');
      helper(open + 1, close, n, sub, ans);
      sub.pop_back();
    }

    // Add close parenthesis only when it keeps the string valid
    if (close < open) {
      sub.push_back(')');
      helper(open, close + 1, n, sub, ans);
      sub.pop_back();
    }
  }
};
