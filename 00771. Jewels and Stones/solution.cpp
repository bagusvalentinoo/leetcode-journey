/**
 * Problem: 771. Jewels and Stones
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int numJewelsInStones(string jewels, string stones)
  {
    // Counter for stones that are jewels
    int jewelCount = 0;

    // Create an unordered_set of jewel characters for O(1) lookup
    unordered_set<char> jewelSet(jewels.begin(), jewels.end());

    // Check each stone against the jewel set
    for (char stone : stones)
    {
      // If stone is in jewel set, increment counter
      if (jewelSet.find(stone) != jewelSet.end())
        jewelCount++;
    }

    // Return the total count of stones that are jewels
    return jewelCount;
  }
};
