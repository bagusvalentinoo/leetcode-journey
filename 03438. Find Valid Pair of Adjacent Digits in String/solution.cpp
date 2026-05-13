/**
 * Problem: 3438. Find Valid Pair of Adjacent Digits in String
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string findValidPair(string s) {
    // Frequency array for digits 0-9
    vector<int> digitFrequency(10, 0);

    // Count occurrences of each digit in the string
    for (char character : s)
      digitFrequency[character - '0']++;

    // Iterate through adjacent pairs in the string
    for (int index = 0; index < s.length() - 1; index++) {
      // Check if digits are different and frequencies match their digit values
      if (s[index] != s[index + 1] &&
          digitFrequency[s[index] - '0'] == s[index] - '0' &&
          digitFrequency[s[index + 1] - '0'] == s[index + 1] - '0')
        // Return the valid pair as a substring
        return s.substr(index, 2);
    }

    // No valid pair found
    return "";
  }
};
