/**
 * Problem: 2828. Check if a String Is an Acronym of Words
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool isAcronym(vector<string> &words, string s) {
    // If number of words doesn't match string length, it can't be an acronym
    if (words.size() != s.length())
      return false;

    // Compare each character of s with first letter of corresponding word
    for (int i = 0; i < words.size(); i++) {
      // If characters don't match, return false immediately
      if (words[i][0] != s[i])
        return false;
    }

    // All characters matched, valid acronym
    return true;
  }
};
