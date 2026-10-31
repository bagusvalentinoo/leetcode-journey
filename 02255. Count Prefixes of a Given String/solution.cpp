/**
 * Problem: 2255. Count Prefixes of a Given String
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countPrefixes(vector<string> &words, string s) {
    // Initialize counter for prefix matches
    int count = 0;

    // Check each word against the target string
    for (const string &word : words) {
      // Increment count if s starts with the current word
      if (s.substr(0, word.size()) == word) count++;
    }

    // Return the total number of prefix matches
    return count;
  }
};
