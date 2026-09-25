/**
 * Problem: 1832. Check if the Sentence Is Pangram
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool checkIfPangram(string sentence) {
    // Track seen letters
    bool seen[26] = {false};

    // Process each character
    for (char ch : sentence)
      seen[ch - 'a'] = true;

    // Check every letter was seen
    for (int i = 0; i < 26; i++)
      if (!seen[i])
        return false;

    // All letters present
    return true;
  }
};
