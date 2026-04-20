/**
 * Problem: 3838. Weighted Word Mapping
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string MapWordWeights(string[] words, int[] weights)
  {
    // Create a character array to store encoded characters
    var result = new char[words.Length];

    // Iterate through each word in the input array
    for (var i = 0; i < words.Length; i++)
    {
      // Get the current word
      var word = words[i];

      // Initialize total weight for current word
      var score = 0;

      // Calculate sum of weights for all characters in the word
      foreach (var letter in word)
        score += weights[letter - 'a'];

      // Reduce score modulo 26 to get position from end of alphabet
      score %= 26;

      // Get character from end of alphabet (starting from 'z')
      result[i] = (char)('z' - score);
    }

    // Return the encoded string by joining all characters
    return new string(result);
  }
}
