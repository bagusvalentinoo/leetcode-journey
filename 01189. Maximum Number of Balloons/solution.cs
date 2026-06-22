/**
 * Problem: 1189. Maximum Number of Balloons
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxNumberOfBalloons(string text)
  {
    // Call the frequency array method to calculate the maximum number of "balloon" words
    return CountMaxBalloonsUsingFrequencyArray(text);
  }

  // Helper method to calculate maximum "balloon" words using frequency array
  public int CountMaxBalloonsUsingFrequencyArray(string text)
  {
    // Create frequency table for 26 lowercase letters
    int[] letterFrequency = new int[26];

    // ASCII value of 'a' for index calculation
    int asciiLowerA = (int)'a';

    // Count occurrences of each character in the text
    foreach (char character in text)
    {
      // Calculate index by subtracting ASCII value of 'a'
      int charIndex = (int)character - asciiLowerA;

      // Increment frequency for this character
      letterFrequency[charIndex]++;
    }

    // Calculate result starting with minimum of 'b' and 'a'
    // 'b' is at index 1, 'a' is at index 0
    int maxBalloons = Math.Min(letterFrequency[1], letterFrequency[0]);

    // Compare with 'l' divided by 2 (needs 2 per "balloon")
    // 'l' is at index 11
    maxBalloons = Math.Min(maxBalloons, letterFrequency[(int)'l' - asciiLowerA] / 2);

    // Compare with 'o' divided by 2 (needs 2 per "balloon")
    // 'o' is at index 14
    maxBalloons = Math.Min(maxBalloons, letterFrequency[(int)'o' - asciiLowerA] / 2);

    // Compare with 'n' (needs 1 per "balloon")
    // 'n' is at index 13
    maxBalloons = Math.Min(maxBalloons, letterFrequency[(int)'n' - asciiLowerA]);

    // Return the maximum number of "balloon" words that can be formed
    return maxBalloons;
  }
}
