/**
 * Problem: 1528. Shuffle String
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string restoreString(string s, vector<int> &indices) {
    // Initialize result string with the same length as the input string
    string result(s.size(), ' ');

    // Place each character at its target position
    for (int i = 0; i < s.size(); i++)
      // Character at index i moves to position indices[i]
      result[indices[i]] = s[i];

    // Return the restored string
    return result;
  }
};
