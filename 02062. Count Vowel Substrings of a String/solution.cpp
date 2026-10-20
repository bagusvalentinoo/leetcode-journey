/**
 * Problem: 2062. Count Vowel Substrings of a String
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countVowelSubstrings(string word) {
    // Track the start of the current consecutive-vowel block.
    int startOfBlock{0};
    // Count each vowel inside the current window.
    int aCount{0}, eCount{0}, iCount{0}, oCount{0}, uCount{0};
    // Track the left boundary of the current window.
    int left{0};

    // Clear vowel counts after reaching a consonant.
    auto reset = [&]() {
      aCount = 0;
      eCount = 0;
      iCount = 0;
      oCount = 0;
      uCount = 0;
    };

    // Check whether the current window contains every vowel.
    auto allVowelsPresent = [&]() {
      return aCount && eCount && iCount && oCount && uCount;
    };

    // Accumulate qualifying vowel-only substrings.
    int total{0};

    // Expand the window one character at a time.
    for (int right = 0; right < word.size(); ++right) {
      // Read the character at the right boundary.
      char currentCharacter = word[right];

      // Restart the block and window when a consonant is found.
      if (!(currentCharacter == 'a' || currentCharacter == 'e' ||
            currentCharacter == 'i' || currentCharacter == 'o' ||
            currentCharacter == 'u')) {
        reset();

        startOfBlock = right + 1;
        left = right + 1;

        continue;
      }

      // Add the current vowel to the window count.
      if (currentCharacter == 'a')
        ++aCount;
      else if (currentCharacter == 'e')
        ++eCount;
      else if (currentCharacter == 'i')
        ++iCount;
      else if (currentCharacter == 'o')
        ++oCount;
      else if (currentCharacter == 'u')
        ++uCount;

      // Shrink the window until removing another character loses a vowel.
      while (allVowelsPresent()) {
        // Remove the leftmost vowel from the window count.
        if (word[left] == 'a')
          --aCount;
        else if (word[left] == 'e')
          --eCount;
        else if (word[left] == 'i')
          --iCount;
        else if (word[left] == 'o')
          --oCount;
        else if (word[left] == 'u')
          --uCount;

        // Advance the left boundary after removing its character.
        ++left;
      }

      // Count valid starting positions ending at the current character.
      total += left - startOfBlock;
    }

    // Return the total number of vowel substrings.
    return total;
  }
};
