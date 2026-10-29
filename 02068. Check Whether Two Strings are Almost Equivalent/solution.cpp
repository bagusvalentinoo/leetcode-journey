/**
 * Problem: 2068. Check Whether Two Strings are Almost Equivalent
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool checkAlmostEquivalent(string word1, string word2) {
    // Track the frequency difference for each lowercase letter
    vector<int> frequencies(26);

    // Add letters from the first word and remove letters from the second word
    for (int i = 0; i < word1.size(); i++) {
      frequencies[word1[i] - 'a']++;
      frequencies[word2[i] - 'a']--;
    }

    // Reject a letter whose frequency difference exceeds the allowed limit
    for (int frequency : frequencies)
      if (abs(frequency) > 3) return false;

    // All letter frequency differences are within the allowed limit
    return true;
  }
};
