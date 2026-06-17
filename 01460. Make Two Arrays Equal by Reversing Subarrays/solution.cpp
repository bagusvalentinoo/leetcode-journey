/**
 * Problem: 1460. Make Two Arrays Equal by Reversing Subarrays
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
  bool canBeEqual(vector<int> &target, vector<int> &arr)
  {
    // Frequency array for numbers 0-1000
    vector<int> targetFrequency(1001, 0);

    // Count occurrences of each number in target array
    for (int num : target)
      targetFrequency[num]++;

    // Verify each number in arr has matching frequency in target
    for (int num : arr)
    {
      // If number not found in target or frequency exhausted, arrays differ
      if (targetFrequency[num] == 0)
        return false;

      // Decrement frequency for this number
      targetFrequency[num]--;
    }

    // All elements matched successfully
    return true;
  }
};
