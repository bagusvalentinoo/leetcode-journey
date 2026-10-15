/**
 * Problem: 1897. Redistribute Characters to Make All Strings Equal
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool MakeEqual(string[] words)
  {
    // Track frequency of each lowercase letter across all words
    int[] freqs = new int[26];

    // Count every character across all words
    foreach (var word in words)
    {
      // Tally each character in the current word
      foreach (var ch in word) freqs[ch - 'a']++;
    }

    // Verify each character total divides evenly among all words
    foreach (var freq in freqs) if (freq % words.Length != 0) return false;

    // All character counts redistribute evenly
    return true;
  }
}
