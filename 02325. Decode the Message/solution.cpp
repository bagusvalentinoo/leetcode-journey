/**
 * Problem: 2325. Decode the Message
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string decodeMessage(string key, string message) {
    // Store each key letter's decoded alphabet letter
    vector<char> substitutions(26);
    char decodedLetter = 'a';

    // Build the substitution table from first appearances in the key
    for (char character : key) {
      if (character != ' ' && substitutions[character - 'a'] == '\0')
        substitutions[character - 'a'] = decodedLetter++;
    }

    // Decode each message letter while preserving spaces
    for (char &character : message) {
      if (character != ' ')
        character = substitutions[character - 'a'];
    }

    // Return the decoded message
    return message;
  }
};
