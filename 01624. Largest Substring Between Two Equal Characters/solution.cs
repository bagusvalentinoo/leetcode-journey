/**
 * Problem: 1624. Largest Substring Between Two Equal Characters
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxLengthBetweenEqualCharacters(string s)
  {
    // Track first occurrence index of each letter, -1 means unseen
    int[] firstIndex = new int[26];

    // Initialize all entries to -1 to mark characters as unseen
    for (int i = 0; i < 26; i++) firstIndex[i] = -1;

    // Store maximum length found, -1 when no equal pair exists
    int maxLength = -1;

    // Scan each character with its index
    for (int i = 0; i < s.Length; i++)
    {
      // Convert character to array index 0-25
      int charIndex = s[i] - 'a';

      // Check if character was seen before
      if (firstIndex[charIndex] == -1)
        // Record first occurrence index
        firstIndex[charIndex] = i;
      else
      {
        // Calculate length between first occurrence and current index excluding both ends
        int currentLength = i - firstIndex[charIndex] - 1;

        // Update maximum length if current pair is longer
        maxLength = Math.Max(maxLength, currentLength);
      }
    }

    // Return the longest length found, or -1 when no character repeats
    return maxLength;
  }
}
