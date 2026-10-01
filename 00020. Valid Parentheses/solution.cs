/**
 * Problem: 20. Valid Parentheses
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool IsValid(string s)
  {
    // Odd length strings cannot have all brackets matched
    if ((s.Length & 1) != 0) return false;

    // Allocate stack for expected closing brackets, at most half the input length
    Span<char> stack = stackalloc char[s.Length / 2];

    // Track the top position of the stack
    int top = 0;

    // Iterate through each character in the string
    foreach (var c in s)
    {
      // If opening parenthesis, push expected closing parenthesis
      if (c == '(')
      {
        // Guard against overflow before pushing
        if (top == stack.Length) return false;

        // Store expected closer and advance top
        stack[top++] = ')';
      }
      // If opening square bracket, push expected closing bracket
      else if (c == '[')
      {
        // Guard against overflow before pushing
        if (top == stack.Length) return false;

        // Store expected closer and advance top
        stack[top++] = ']';
      }
      // If opening curly brace, push expected closing brace
      else if (c == '{')
      {
        // Guard against overflow before pushing
        if (top == stack.Length) return false;

        // Store expected closer and advance top
        stack[top++] = '}';
      }
      else
      {
        // If stack is empty or top does not match, string is invalid
        if (top == 0 || stack[--top] != c) return false;
      }
    }

    // Valid only if all expected closers were matched (stack is empty)
    return top == 0;
  }
}
