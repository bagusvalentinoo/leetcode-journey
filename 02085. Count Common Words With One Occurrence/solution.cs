/**
 * Problem: 2085. Count Common Words With One Occurrence
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountWords(string[] words1, string[] words2)
  {
    // Store the occurrence count for every word in the first array
    Dictionary<string, int> frequencies1 = new Dictionary<string, int>();

    // Count each word from the first array
    foreach (string word in words1)
      frequencies1[word] = frequencies1.GetValueOrDefault(word, 0) + 1;

    // Store the occurrence count for every word in the second array
    Dictionary<string, int> frequencies2 = new Dictionary<string, int>();

    // Count each word from the second array
    foreach (string word in words2)
      frequencies2[word] = frequencies2.GetValueOrDefault(word, 0) + 1;

    // Track words occurring exactly once in both arrays
    int commonWordCount = 0;

    // Check each distinct word from the first array
    foreach (KeyValuePair<string, int> entry in frequencies1)
      // Count the word only when it occurs once in both arrays
      if (entry.Value == 1 && frequencies2.GetValueOrDefault(entry.Key, 0) == 1) commonWordCount++;

    // Return the number of qualifying common words
    return commonWordCount;
  }
}
