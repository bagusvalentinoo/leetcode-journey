/**
 * Problem: 2000. Reverse Prefix of Word
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string ReversePrefix(string word, char ch)
  {
    // Find first occurrence of target character
    int endIndex = word.IndexOf(ch);

    // Return original word if character not found
    if (endIndex == -1) return word;

    // Convert string to array for in-place reversal
    char[] chars = word.ToCharArray();

    // Initialize two pointers at prefix boundaries
    int left = 0, right = endIndex;

    // Reverse prefix with two-pointer swap
    while (left < right)
    {
      // Swap characters at left and right pointers
      char temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }

    // Build reversed string from character array
    return new string(chars);
  }
}
