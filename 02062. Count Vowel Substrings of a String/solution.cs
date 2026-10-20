/**
 * Problem: 2062. Count Vowel Substrings of a String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountVowelSubstrings(string word)
  {
    // Store the latest index of each vowel in "aeiou" order.
    int[] lastSeen = { -1, -1, -1, -1, -1 };
    // Track the most recent consonant that invalidates earlier starts.
    int lastConsonant = -1;
    // Count vowel-only substrings containing every vowel.
    int count = 0;

    // Process each character as the end of a candidate substring.
    for (int i = 0; i < word.Length; i++)
    {
      // Map the current vowel to its index in the vowel order.
      int vowelIndex = "aeiou".IndexOf(word[i]);

      // Reset the valid start boundary when a consonant is found.
      if (vowelIndex == -1)
      {
        lastConsonant = i;
        continue;
      }

      // Record the latest occurrence of the current vowel.
      lastSeen[vowelIndex] = i;

      // Find the earliest latest occurrence among all vowels.
      int earliest = lastSeen[0];
      for (int j = 1; j < 5; j++)
      {
        // Keep the smallest latest occurrence.
        if (lastSeen[j] < earliest)
          earliest = lastSeen[j];
      }

      // Count valid starts that include all vowels after the last consonant.
      if (earliest > lastConsonant)
        count += earliest - lastConsonant;
    }

    // Return the total number of qualifying substrings.
    return count;
  }
}
