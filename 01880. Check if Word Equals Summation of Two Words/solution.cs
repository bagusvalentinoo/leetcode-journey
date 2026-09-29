/**
 * Problem: 1880. Check if Word Equals Summation of Two Words
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool IsSumEqual(string firstWord, string secondWord, string targetWord)
  {
    // Helper function to convert word to numerical value
    int GetValue(string word)
    {
      // Initialize accumulated number
      int num = 0;

      // Process each character in the word
      foreach (char ch in word)
        // Shift digits left and append letter value (a -> 0, b -> 1, ...)
        num = num * 10 + (ch - 'a');

      // Return the numerical value of the word
      return num;
    }

    // Convert words to numerical values
    int first = GetValue(firstWord), second = GetValue(secondWord), target = GetValue(targetWord);

    // Return true if summation of first two values equals target value
    return first + second == target;
  }
}
