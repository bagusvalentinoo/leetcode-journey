/**
 * Problem: 3582. Generate Tag for Video Caption
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string generateTag(string caption) {
    // Initialize result string with '#' prefix
    string result = "#";

    // Initialize index pointers for iteration
    int currentIndex = 0;
    int nextIndex = 0;

    // Flag to indicate if next character is start of a new word
    bool isNewWord = false;

    // Iterate through each character in the caption
    while (currentIndex < caption.length()) {
      // Check if current character is a letter
      if (isalpha(caption[currentIndex])) {
        // If it's a new word and not the first character, capitalize the letter
        if (isNewWord == true && result.back() != '#')
          result += (toupper(caption[currentIndex]));
        // Otherwise, convert to lowercase
        else
          result += tolower(caption[currentIndex]);

        // Reset new word flag after processing the letter
        isNewWord = false;
      }

      // If current character is a space, mark that next letter starts a new
      // word
      if (caption[currentIndex] == ' ')
        isNewWord = true;

      // Move to next character
      currentIndex++;
    }

    // Return result truncated to maximum 100 characters
    return result.substr(0, min((int)(result.length()), 100));
  }
};
