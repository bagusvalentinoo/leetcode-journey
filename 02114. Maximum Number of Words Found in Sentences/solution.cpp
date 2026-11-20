/**
 * Problem: 2114. Maximum Number of Words Found in Sentences
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int mostWordsFound(vector<string> &sentences) {
    // Track the largest word count found
    int maximumWords = 0;

    // Count words in each sentence
    for (const string &sentence : sentences) {
      // A sentence has one more word than spaces
      int wordCount = 1;

      // Count each space separating words
      for (char character : sentence)
        if (character == ' ')
          wordCount++;

      // Update the largest word count
      maximumWords = max(maximumWords, wordCount);
    }

    // Return the largest word count
    return maximumWords;
  }
};
