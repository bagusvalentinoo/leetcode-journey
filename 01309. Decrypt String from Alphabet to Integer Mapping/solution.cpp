/**
 * Problem: 1309. Decrypt String from Alphabet to Integer Mapping
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string freqAlphabets(string s) {
    // Result string to store decoded characters
    string result;

    // Index to keep track of the current position in the string
    int index = 0;
    // Length of the string
    int length = s.length();

    // Process the string from left to right
    while (index < length) {
      // Check if current position starts a two-digit number with '#'
      if (index + 2 < length && s[index + 2] == '#') {
        // Extract two-digit number
        int num = stoi(s.substr(index, 2));

        // Convert to corresponding letter (a=1, b=2, ..., z=26)
        result.push_back('a' + num - 1);
        // Skip over the two digits and the '#'
        index += 3;
      } else {
        // Single digit number
        int num = s[index] - '0';

        // Convert to corresponding letter
        result.push_back('a' + num - 1);
        // Move to next character
        index++;
      }
    }

    // Return the result string
    return result;
  }
};
