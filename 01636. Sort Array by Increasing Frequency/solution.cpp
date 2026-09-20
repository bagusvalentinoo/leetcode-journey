/**
 * Problem: 1636. Sort Array by Increasing Frequency
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> frequencySort(vector<int> &nums) {
    // Count frequency of each value
    unordered_map<int, int> frequency;

    // Populate frequency map with occurrence counts
    for (int num : nums)
      frequency[num]++;

    // Sort by frequency ascending, then by value descending for ties
    sort(nums.begin(), nums.end(), [&](int a, int b) {
      return frequency[a] == frequency[b] ? a > b : frequency[a] < frequency[b];
    });

    // Return the sorted array
    return nums;
  }
};
