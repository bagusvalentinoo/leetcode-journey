/**
 * Problem: 2351. First Letter to Appear Twice
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  char repeatedCharacter(string s) {
    // Track characters encountered while scanning from left to right
    bool seen[26] = {};

    // Return immediately when a character has already been seen
    for (char character : s) {
      int index = character - 'a';
      if (seen[index])
        return character;

      // Record the character's first occurrence
      seen[index] = true;
    }

    // The constraints guarantee that a repeated character exists
    return '\0';
  }
};
