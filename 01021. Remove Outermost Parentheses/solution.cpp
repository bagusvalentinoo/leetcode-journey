/**
 * Problem: 1021. Remove Outermost Parentheses
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  string removeOuterParentheses(string s)
  {
    // Result string to store output
    string result = "";

    // Track current nesting depth
    int depth = 0;

    // Iterate through each character in the string
    for (char currentChar : s)
    {
      // If character is an opening parenthesis
      if (currentChar == '(')
      {
        // Add to result if not the outermost parenthesis (depth > 0)
        if (depth > 0)
          result += currentChar;

        // Increment depth for nested parentheses
        depth++;
      }
      // If character is a closing parenthesis
      else
      {
        // Decrement depth first (this closing parenthesis closes current level)
        depth--;

        // Add to result if not closing the outermost parenthesis (depth > 0)
        if (depth > 0)
          result += currentChar;
      }
    }

    // Return the resulting string with outermost parentheses removed
    return result;
  }
};
