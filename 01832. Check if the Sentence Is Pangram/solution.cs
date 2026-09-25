/**
 * Problem: 1832. Check if the Sentence Is Pangram
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool CheckIfPangram(string sentence)
  {
    // Count occurrences for each letter
    int[] freq = new int[26];

    // Process each character
    foreach (char ch in sentence) freq[ch - 'a']++;

    // Check every letter appears at least once
    for (int i = 0; i < 26; i++)
      if (freq[i] == 0) return false;

    // All letters present
    return true;
  }
}
