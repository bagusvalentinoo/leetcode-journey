/**
 * Problem: 2085. Count Common Words With One Occurrence
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countWords(vector<string> &words1, vector<string> &words2) {
    // Store the occurrence counts for words in both arrays
    unordered_map<string, int> wordCounts1, wordCounts2;

    // Count each word in the first array
    for (string &word : words1)
      wordCounts1[word]++;

    // Count each word in the second array
    for (string &word : words2)
      wordCounts2[word]++;

    // Track words that occur exactly once in both arrays
    int commonWordCount = 0;

    // Check each distinct word from the first array
    for (auto &[word, count] : wordCounts1) {
      // Skip words that occur more than once in the first array
      if (count != 1)
        continue;
      // Count words that occur exactly once in the second array
      if (wordCounts2[word] == 1)
        commonWordCount++;
    }

    // Return the number of qualifying common words
    return commonWordCount;
  }
};
