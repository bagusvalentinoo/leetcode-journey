/**
 * Problem: 1544. Make The String Great
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string MakeGood(string s)
  {
    // Initialize a list to use as a stack
    List<char> stack = new List<char>();

    // Iterate through each character in the input string
    foreach (char character in s)
    {
      // Get the last character on the stack, or null character if empty
      char top = stack.Count > 0 ? stack[stack.Count - 1] : '\0';

      // Same letter in opposite case differs by 32 in ASCII code
      // (e.g., 'a' = 97 and 'A' = 65, 'z' = 122 and 'Z' = 90)
      if (top != '\0' && Math.Abs(character - top) == 32)
        // Bad pair found, remove the top character
        stack.RemoveAt(stack.Count - 1);
      else
        // No conflict, push the current character onto the stack
        stack.Add(character);
    }

    // Join the remaining characters back into a string
    return new string(stack.ToArray());
  }
}
