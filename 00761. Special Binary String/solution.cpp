/**
 * Problem: 761. Special Binary String
 *
 * Difficulty: Hard
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string makeLargestSpecial(string s) {
    // Base case: strings of length 2 or less cannot be rearranged
    if (s.length() <= 2)
      return s;

    // Track balance of 1s and 0s
    int balance = 0;

    // Track start position of current substring
    int start = 0;

    // Store processed special substrings
    vector<string> specials;

    // Iterate through the string
    for (int i = 0; i < s.length(); i++) {
      // Increment balance for '1', decrement for '0'
      balance += s[i] == '1' ? 1 : -1;

      // When balance reaches zero, we found a valid special substring
      if (balance == 0) {
        // Process inner substring recursively
        // Wrap with '1' at start and '0' at end
        specials.push_back(
            "1" + makeLargestSpecial(s.substr(start + 1, i - start - 1)) + "0");

        // Move start to next position
        start = i + 1;
      }
    }

    // Sort in descending order
    sort(specials.begin(), specials.end(), greater<string>());

    // Initialize result string
    string result = "";

    // Concatenate all special substrings in descending order
    for (const string &str : specials)
      result += str;

    // Return the lexicographically largest special string
    return result;
  }
};
