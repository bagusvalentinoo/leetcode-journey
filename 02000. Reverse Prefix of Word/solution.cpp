/**
 * Problem: 2000. Reverse Prefix of Word
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string reversePrefix(string word, char ch) {
    // Find first occurrence of target character
    size_t endIndex = word.find(ch);

    // Return original word if character not found
    if (endIndex == string::npos)
      return word;

    // Initialize two pointers at prefix boundaries
    int left = 0, right = (int)endIndex;

    // Reverse prefix with two-pointer swap
    while (left < right) {
      // Swap characters at left and right pointers
      char temp = word[left];
      word[left] = word[right];
      word[right] = temp;
      left++;
      right--;
    }

    // Return string with reversed prefix
    return word;
  }
};
