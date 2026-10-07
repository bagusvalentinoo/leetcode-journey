/**
 * Problem: 1941. Check if All Characters Have Equal Number of Occurrences
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool areOccurrencesEqual(string s) {
    // Store the frequency for each lowercase English letter
    array<short, 26> freq{};

    // Count the frequency of every character in the input string
    for (int i = 0; i < s.length(); i++) {
      freq[s[i] - 97]++;
    }

    // Use the first character frequency as the comparison target
    short target = freq[s[0] - 97];

    // Compare only frequencies for characters that appear in the string
    for (int i = 0; i < 26; i++) {
      if (freq[i] != 0 && freq[i] != target)
        return false;
    }

    // All character frequencies are equal
    return true;
  }
};
