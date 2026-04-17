/**
 * Problem: 3856. Trim Trailing Vowels
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string trimTrailingVowels(string s) {
    // Set of vowels for lookup
    unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u'};

    // Remove trailing vowels from the end
    while (!s.empty()) {
      // Convert last character to lowercase for case-insensitive comparison
      char lastChar = tolower(s.back());

      // If last character is a vowel, remove it
      if (vowels.find(lastChar) != vowels.end())
        s.pop_back();
      // Stop when non-vowel is found
      else
        break;
    }

    return s;
  }
};
