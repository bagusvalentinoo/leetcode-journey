/**
 * Problem: 2068. Check Whether Two Strings are Almost Equivalent
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool CheckAlmostEquivalent(string word1, string word2)
  {
    // Track the frequency difference for each lowercase letter
    int[] frequencies = new int[26];

    // Add letters from the first word and remove letters from the second word
    for (int i = 0; i < word1.Length; i++)
    {
      frequencies[word1[i] - 'a']++;
      frequencies[word2[i] - 'a']--;
    }

    // Reject a letter whose frequency difference exceeds the allowed limit
    foreach (int frequency in frequencies)
      if (Math.Abs(frequency) > 3) return false;

    // All letter frequency differences are within the allowed limit
    return true;
  }
}
