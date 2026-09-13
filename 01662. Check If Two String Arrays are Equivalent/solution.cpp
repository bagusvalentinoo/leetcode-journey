/**
 * Problem: 1662. Check If Two String Arrays are Equivalent
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool arrayStringsAreEqual(vector<string> &word1, vector<string> &word2) {
    // Concatenate all parts of the first array into a single string
    string first;

    // Append each part in order
    for (string &part : word1)
      first += part;

    // Concatenate all parts of the second array into a single string
    string second;

    // Append each part in order
    for (string &part : word2)
      second += part;

    // Compare the concatenated strings for equality
    return first == second;
  }
};
