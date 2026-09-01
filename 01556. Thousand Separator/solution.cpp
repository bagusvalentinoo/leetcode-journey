/**
 * Problem: 1556. Thousand Separator
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string thousandSeparator(int n) {
    // Convert integer to string for digit-by-digit processing
    string numString = to_string(n);

    // Build the formatted result incrementally
    string result = "";

    // Iterate through each digit from left to right
    for (int i = 0; i < numString.length(); i++) {
      // Insert a dot before the digit whenever the remaining digits form
      // complete groups of three
      if (i > 0 && (numString.length() - i) % 3 == 0)
        result += '.';

      // Append the current digit to the result
      result += numString[i];
    }

    // Return the string with thousand separators inserted
    return result;
  }
};
