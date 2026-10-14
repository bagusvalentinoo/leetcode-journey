/**
 * Problem: 1844. Replace All Digits with Characters
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string ReplaceDigits(string s)
  {
    // Convert string to mutable character array
    char[] chars = s.ToCharArray();

    // Process every odd index to replace digits
    for (int i = 1; i < chars.Length; i += 2)
      // Shift previous character forward by digit value
      chars[i] = (char)(chars[i - 1] + (chars[i] - '0'));

    // Return the string after replacing all digits
    return new string(chars);
  }
}
