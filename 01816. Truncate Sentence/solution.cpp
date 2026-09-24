/**
 * Problem: 1816. Truncate Sentence
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string truncateSentence(string s, int k) {
    // Scan string to find the k-th space position
    for (int i = 0; i < (int)s.size(); i++) {
      // Check if current character is a space
      if (s[i] == ' ') {
        // Decrement remaining word count
        k--;

        // When k reaches 0, we have found the space after the k-th word
        if (k == 0) {
          // Return substring from start to current index (excluding trailing space)
          return s.substr(0, i);
        }
      }
    }

    // If fewer than k spaces found, sentence has exactly k words
    return s;
  }
};
