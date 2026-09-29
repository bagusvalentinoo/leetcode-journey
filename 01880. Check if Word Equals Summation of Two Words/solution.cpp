/**
 * Problem: 1880. Check if Word Equals Summation of Two Words
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool isSumEqual(string firstWord, string secondWord, string targetWord) {
    // Helper function to convert word to numerical value
    auto getValue = [](string word) {
      // Initialize accumulated number
      int num = 0;

      // Process each character in the word
      for (char ch : word)
        // Shift digits left and append letter value (a -> 0, b -> 1, ...)
        num = num * 10 + (ch - 'a');

      // Return the numerical value of the word
      return num;
    };

    // Convert words to numerical values
    int first = getValue(firstWord), second = getValue(secondWord),
        target = getValue(targetWord);

    // Return true if summation of first two values equals target value
    return first + second == target;
  }
};
