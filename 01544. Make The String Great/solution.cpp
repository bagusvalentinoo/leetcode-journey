/**
 * Problem: 1544. Make The String Great
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string makeGood(string s) {
    // Initialize a string to use as a stack
    string stack;

    // Iterate through each character in the input string
    for (char character : s) {
      // Get the last character on the stack, or null character if empty
      char top = stack.empty() ? '\0' : stack.back();

      // Same letter in opposite case differs by 32 in ASCII code
      // (e.g., 'a' = 97 and 'A' = 65, 'z' = 122 and 'Z' = 90)
      if (top != '\0' && abs(character - top) == 32)
        // Bad pair found, remove the top character
        stack.pop_back();
      else
        // No conflict, push the current character onto the stack
        stack.push_back(character);
    }

    // Return the remaining characters as the final string
    return stack;
  }
};
