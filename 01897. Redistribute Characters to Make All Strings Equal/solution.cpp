/**
 * Problem: 1897. Redistribute Characters to Make All Strings Equal
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool makeEqual(vector<string> &words) {
    // Get number of strings to divide character counts by
    int n = words.size();

    // Track frequency of each lowercase letter
    vector<int> counts(26, 0);

    // Count every character across all strings
    for (string &word : words) {
      // Tally each character in the current word
      for (char c : word) counts[c - 'a']++;
    }

    // Verify each character total divides evenly among all strings
    for (int i = 0; i < 26; i++)
      if (counts[i] % n != 0)
        return false;

    // All character counts redistribute evenly
    return true;
  }
};
