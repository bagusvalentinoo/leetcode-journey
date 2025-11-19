/**
 * Problem: 2154. Keep Multiplying Found Values by Two
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
  int findFinalValue(vector<int> &nums, int original)
  {
    unordered_set<int> numSet(nums.begin(), nums.end());

    while (numSet.count(original))
    {
      original *= 2;
    }

    return original;
  }
};