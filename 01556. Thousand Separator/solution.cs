/**
 * Problem: 1556. Thousand Separator
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string ThousandSeparator(int n)
  {
    // Convert integer to string for digit-by-digit processing
    string numString = n.ToString();

    // Build the formatted result incrementally
    string result = "";

    // Iterate through each digit from left to right
    for (int i = 0; i < numString.Length; i++)
    {
      // Insert a dot before the digit whenever the remaining digits form complete groups of three
      if (i > 0 && (numString.Length - i) % 3 == 0)
        result += '.';

      // Append the current digit to the result
      result += numString[i];
    }

    // Return the string with thousand separators inserted
    return result;
  }
}
