/**
 * Problem: 2399. Check Distances Between Same Letters
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool checkDistances(string s, vector<int> &distance) {
    // Store the first position seen for every letter
    vector<int> firstPositions(26, -1);

    // Check each letter as it appears in the string
    for (int i = 0; i < s.size(); i++) {
      // Convert the current letter to its alphabet index
      int letterIndex = s[i] - 'a';

      // Record a letter's first occurrence
      if (firstPositions[letterIndex] == -1) {
        firstPositions[letterIndex] = i;
        continue;
      }

      // Reject distances that do not match the required gap
      if (i - firstPositions[letterIndex] - 1 != distance[letterIndex])
        return false;
    }

    // All repeated letters have their required distances
    return true;
  }
};
