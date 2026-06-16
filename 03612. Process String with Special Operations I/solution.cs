/**
 * Problem: 3612. Process String with Special Operations I
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Problem: 3612. Process String with Special Operations I
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string ProcessStr(string s)
  {
    // Initialize StringBuilder to efficiently build result string
    var resultBuilder = new StringBuilder();

    // Process each character in the input string
    foreach (var currentChar in s)
    {
      // Handle special operations based on character
      switch (currentChar)
      {
        // Case '*': Remove the last character from result
        case '*':
          // Remove last character if result is not empty
          if (resultBuilder.Length > 0)
            resultBuilder.Remove(resultBuilder.Length - 1, 1);
          break;

        // Case '%': Reverse the entire result string
        case '%':
          // Reverse the current result using helper method
          ReverseStringBuilder(resultBuilder);
          break;

        // Case '#': Duplicate the result (append to itself)
        case '#':
          // Store current result as string
          var currentResult = resultBuilder.ToString();

          // Append the stored result to itself
          resultBuilder.Append(currentResult);
          break;

        // Default: Append the character to result
        default:
          resultBuilder.Append(currentChar);
          break;
      }
    }

    // Return the final processed result string
    return resultBuilder.ToString();
  }

  // Helper method to reverse a StringBuilder in-place
  private void ReverseStringBuilder(StringBuilder stringBuilder)
  {
    // Initialize two pointers: left at start, right at end
    int leftPointer = 0, rightPointer = stringBuilder.Length - 1;

    // Swap characters from both ends until pointers meet
    while (rightPointer > leftPointer)
    {
      // Store character at left position
      char tempChar = stringBuilder[leftPointer];

      // Swap left and right characters
      stringBuilder[leftPointer] = stringBuilder[rightPointer];
      stringBuilder[rightPointer] = tempChar;

      // Move pointers inward
      leftPointer++;
      rightPointer--;
    }
  }
}
