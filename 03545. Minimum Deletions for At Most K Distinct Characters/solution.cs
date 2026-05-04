/**
 * Problem: 3545. Minimum Deletions for At Most K Distinct Characters
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinDeletion(string s, int k)
  {
    // Stack-allocated array to store character frequencies (26 letters)
    Span<int> characterFrequencies = stackalloc int[26];

    // Counter for number of distinct characters
    int distinctCount = 0;

    // Count frequencies of each character
    foreach (char character in s)
    {
      // If this is the first occurrence of the character, increment distinct count
      if (characterFrequencies[character - 'a'] == 0)
        distinctCount++;

      // Increment frequency for this character
      characterFrequencies[character - 'a']++;
    }

    // If distinct characters already <= k, no deletions needed
    if (distinctCount <= k)
      return 0;

    // Pointer for number of characters removed
    int removedCount = 0;
    // Accumulator for total deletions
    int totalDeletions = 0;

    // Continue removing smallest frequency characters until only k distinct remain
    while (removedCount < distinctCount - k)
    {
      // Track minimum frequency found
      int minFrequency = int.MaxValue;

      // Track index of character with minimum frequency
      int minIndex = -1;

      // Find the character with the smallest positive frequency
      for (int i = 0; i < 26; i++)
      {
        // Update if current frequency is smaller than previous minimum
        if (minFrequency > characterFrequencies[i] && characterFrequencies[i] > 0)
        {
          minFrequency = characterFrequencies[i];
          minIndex = i;
        }
      }

      // Remove the character by setting its frequency to 0
      characterFrequencies[minIndex] = 0;

      // Add its frequency to total deletions
      totalDeletions += minFrequency;
      // Increment count of removed characters
      removedCount++;
    }

    // Return total deletions required
    return totalDeletions;
  }
}
