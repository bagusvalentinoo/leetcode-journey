/**
 * Problem: 3718. Smallest Missing Multiple of K
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int missingMultiple(vector<int> &nums, int k) {
    // Store array elements in an unordered_set for O(1) lookup
    unordered_set<int> numSet(nums.begin(), nums.end());

    // Start with the first positive multiple of k
    int target = k;

    // Increment by k until finding a multiple not present in nums
    while (numSet.count(target))
      target += k;

    // Return the smallest missing multiple
    return target;
  }
};
