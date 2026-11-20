/**
 * Problem: 2114. Maximum Number of Words Found in Sentences
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MostWordsFound(string[] sentences)
  {
    // Track the largest word count found
    int maximumWords = 0;

    // Count words in each sentence
    foreach (string sentence in sentences)
    {
      // A sentence has one more word than spaces
      int wordCount = 1;

      // Count each space separating words
      foreach (char character in sentence)
      {
        if (character == ' ') wordCount++;
      }

      // Update the largest word count
      maximumWords = Math.Max(maximumWords, wordCount);
    }

    // Return the largest word count
    return maximumWords;
  }
}
