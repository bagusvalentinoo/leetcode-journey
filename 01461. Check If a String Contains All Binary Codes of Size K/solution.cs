/**
 * Problem: 1461. Check If a String Contains All Binary Codes of Size K
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

public class Solution
{
  public bool HasAllCodes(string s, int k)
  {
    // Calculate total number of possible k-bit combinations
    int totalCombinations = 1 << k;

    // Early exit: if string is too short, it can't contain all combinations
    if (s.Length < k + totalCombinations - 1)
      return false;

    // Track which combinations we've seen
    bool[] seenCombinations = new bool[totalCombinations];

    // Counter for unique combinations found
    int uniqueCount = 0;

    // Current rolling hash value
    int currentHash = 0;

    // Bitmask to keep only the last k bits
    int bitmask = totalCombinations - 1;

    // Slide through the string
    for (int i = 0; i < s.Length; i++)
    {
      // Update rolling hash: shift left, mask, add current bit
      currentHash = ((currentHash << 1) & bitmask) | (s[i] - '0');

      // Once we have a full k-length window
      if (i >= k - 1)
      {
        // If this combination hasn't been seen before
        if (!seenCombinations[currentHash])
        {
          seenCombinations[currentHash] = true;
          uniqueCount++;

          // Early return if we've found all combinations
          if (uniqueCount == totalCombinations)
            return true;
        }
      }
    }

    // Return true if we found all combinations
    return uniqueCount == totalCombinations;
  }
}
