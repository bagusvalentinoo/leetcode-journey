/**
 * Problem: 3838. Weighted Word Mapping
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string mapWordWeights(vector<string> &words, vector<int> &weights) {
    // Initialize result string
    string result;

    // Get number of words (not used in the loop)
    int n = words.size();

    // Iterate through each word
    for (string &word : words) {
      // Calculate total weight sum for current word
      int totalWeight = 0;

      // Sum weights of each character in the word
      for (int i = 0; i < word.length(); i++)
        totalWeight += weights[word[i] - 'a'];

      // Reduce modulo 26 to get position within alphabet
      totalWeight %= 26;

      // Reverse position (25 - index) to map from end of alphabet
      totalWeight = 25 - totalWeight;

      // Convert to character ('a' + position) and append to result
      result.push_back(totalWeight + 'a');
    }

    // Return the encoded result string
    return result;
  }
};
