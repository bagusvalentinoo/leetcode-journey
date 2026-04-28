/**
 * Problem: 3407. Substring Matching Pattern
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool hasMatch(string s, string p) {
    // Find the position of the wildcard '*' in the pattern
    int wildcardIndex = p.find('*');

    // Extract the prefix part before and after the wildcard
    string prefixPattern = p.substr(0, wildcardIndex),
           suffixPattern = p.substr(wildcardIndex + 1);

    // Find the first occurrence of prefix in the string
    int prefixMatchIndex = s.find(prefixPattern);

    // If prefix not found, pattern cannot match
    if (prefixMatchIndex == string::npos)
      return false;

    // Get the remaining string after the matched prefix
    string remainingString =
        s.substr(prefixMatchIndex + prefixPattern.length());

    // Check if suffix exists in the remaining string
    int suffixMatchIndex = remainingString.find(suffixPattern);

    // Return true if suffix is found, false otherwise
    return suffixMatchIndex != string::npos;
  }
};
