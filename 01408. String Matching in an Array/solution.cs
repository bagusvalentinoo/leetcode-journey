/**
 * Problem: 1408. String Matching in an Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<string> StringMatching(string[] words)
  {
    // List to store strings that are substrings of another word
    List<string> matchingWords = new List<string>();

    // Number of words in the input array
    int wordCount = words.Length;

    // Check each word to see if it's a substring of any other word
    for (int i = 0; i < wordCount; i++)
    {
      if (IsSubstring(words, words[i]))
        matchingWords.Add(words[i]);
    }

    // Return the list of substrings found
    return matchingWords;
  }

  // Helper method to check if string b is a substring of any other string in array a
  public static bool IsSubstring(string[] stringArray, string target)
  {
    // Return true if any word (excluding the target itself) contains the target as a substring
    return stringArray.Any(word => word != target && word.Contains(target));
  }
}
