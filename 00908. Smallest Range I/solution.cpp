/**
 * Problem: 908. Smallest Range I
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
  int smallestRangeI(vector<int> &nums, int k)
  {
    // Find maximum and minimum values in the array
    int maxValue = *max_element(nums.begin(), nums.end()),
        minValue = *min_element(nums.begin(), nums.end());

    // Calculate adjusted values after applying ±k operation
    int adjustedMax = maxValue - k,
        adjustedMin = minValue + k;

    // If adjusted range overlaps, score is 0; otherwise return difference
    return adjustedMin >= adjustedMax ? 0 : adjustedMax - adjustedMin;
  }
};
