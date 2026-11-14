/**
 * Problem: 2185. Counting Words With a Given Prefix
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int prefixCount(vector<string> &words, string pref) {
    // Count words that start with the required prefix
    int count = 0;

    // Check every word for the prefix
    for (const string &word : words) {
      // Increment the count when the word starts with the prefix
      if (word.compare(0, pref.length(), pref) == 0)
        count++;
    }

    // Return the number of matching words
    return count;
  }
};
