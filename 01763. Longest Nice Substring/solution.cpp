/**
 * Problem: 1763. Longest Nice Substring
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string longestNiceSubstring(string s) {
    // Cache string length to bound both loops
    const int strLen = s.length();

    // Early return for strings too short to be nice
    if (strLen < 2)
      return "";

    // Try every position as split point for bad character
    for (int i = 0; i < strLen; i++) {
      // Assume current character lacks its opposite case counterpart
      bool found = false;

      // Scan whole string for matching opposite case character
      for (int j = 0; j < strLen; j++) {
        // Check if characters match ignoring case
        if (s[i] == tolower(s[j]) || s[i] == toupper(s[j])) {
          // Mark paired when same letter appears in opposite case
          if (s[i] != s[j]) {
            // Record pair found for current character
            found = true;

            // Stop scanning once counterpart is confirmed
            break;
          }
        }
      }

      // Split on bad character since no nice substring can cross it
      if (!found) {
        // Solve left half before the bad character
        const string left = longestNiceSubstring(s.substr(0, i)),
                     right = longestNiceSubstring(s.substr(i + 1));

        // Return longer half, left wins ties for earliest occurrence
        if (left.length() >= right.length())
          return left;
        // Return right half when it holds the longer nice substring
        else
          return right;
      }
    }

    // Whole substring is nice when every character has its counterpart
    return s;
  }
};
