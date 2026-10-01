/**
 * Problem: 20. Valid Parentheses
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool isValid(string s) {
    // Create an empty stack to track opening brackets
    vector<char> stack;

    // Iterate through each character in the string
    for (char c : s) {
      // If character is an opening bracket, push to stack
      if (c == '(' || c == '[' || c == '{') stack.push_back(c);
      // If character is a closing bracket, stack must not be empty
      else if (stack.empty()) return false;
      // If closing bracket, check if it matches with the last opening bracket
      else {
        // Store the top opening bracket
        char top = stack.back();
        // Remove the top opening bracket from stack
        stack.pop_back();
        // Return false if brackets do not match
        if ((c == ')' && top != '(') || (c == ']' && top != '[') || (c == '}' && top != '{')) return false;
      }
    }

    // Valid only if all brackets were properly closed (stack is empty)
    return stack.empty();
  }
};
