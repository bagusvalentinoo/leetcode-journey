/**
 * Problem: 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int IsPrefixOfWord(string sentence, string searchWord)
  {
    // Split sentence into individual words using space delimiter
    string[] words = sentence.Split(" ");

    // Check each word to see if it starts with searchWord
    for (int i = 0; i < words.Length; i++)
    {
      // If word has the prefix, return 1-indexed position
      if (words[i].StartsWith(searchWord))
        return i + 1;
    }

    // No word starts with searchWord
    return -1;
  }
}
