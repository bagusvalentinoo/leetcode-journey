/**
 * Problem: 1704. Determine if String Halves Are Alike
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool halvesAreAlike(string s) {
    // Define vowel set for O(1) lookup including uppercase variants
    unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};

    // Calculate half length as split point between halves
    int half = s.length() / 2;

    // Track vowel count difference between first and second half
    int vowelDifference = 0;

    // Compare vowels at mirrored positions in both halves
    for (int i = 0; i < half; i++) {
      // Increment difference when first-half character is a vowel
      if (vowels.count(s[i]))
        vowelDifference++;
      // Decrement difference when second-half character is a vowel
      if (vowels.count(s[half + i]))
        vowelDifference--;
    }

    // Return true when vowel counts balance to zero
    return vowelDifference == 0;
  }
};
