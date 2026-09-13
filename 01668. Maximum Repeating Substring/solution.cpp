/**
 * Problem: 1668. Maximum Repeating Substring
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int maxRepeating(string sequence, string word) {
    // Maximum possible repetitions bounded by the length ratio
    int maxK = sequence.size() / word.size();

    // Try each k from largest to smallest, the first match is the maximum
    for (int k = maxK; k >= 0; k--) {
      // Build word concatenated k times
      string repeated;
      for (int i = 0; i < k; i++)
        repeated += word;

      // Return k if the repeated string appears in sequence
      if (sequence.find(repeated) != string::npos)
        return k;
    }

    // Word never appears, so the repeating value is 0
    return 0;
  }
};
