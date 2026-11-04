/**
 * Problem: 2309. Greatest English Letter in Upper and Lower Case
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string greatestLetter(string s) {
    // Store all unique characters in string
    unordered_set<char> seen(s.begin(), s.end());

    // Check uppercase letters in reverse order from 'Z' down to 'A'
    for (char c = 'Z'; c >= 'A'; c--) {
      // Check if both uppercase and lowercase exist
      if (seen.count(c) && seen.count(c + 32)) return string(1, c);
    }

    // Return empty string if no such letter exists
    return "";
  }
};
