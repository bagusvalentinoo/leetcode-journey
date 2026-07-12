/**
 * Problem: 771. Jewels and Stones
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int NumJewelsInStones(string jewels, string stones)
  {
    // Counter for stones that are jewels
    int jewelCount = 0;

    // Create a HashSet of jewel characters for O(1) lookup
    HashSet<char> jewelSet = new HashSet<char>(jewels);

    // Check each stone against the jewel set
    foreach (char stone in stones)
    {
      // If stone is in jewel set, increment counter
      if (jewelSet.Contains(stone)) jewelCount++;
    }

    // Return the total count of stones that are jewels
    return jewelCount;
  }
}
