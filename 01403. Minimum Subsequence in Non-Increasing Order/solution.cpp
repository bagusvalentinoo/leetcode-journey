/**
 * Problem: 1403. Minimum Subsequence in Non-Increasing Order
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> minSubsequence(vector<int> &nums) {
    // Sort array in descending order to pick largest elements first
    sort(nums.begin(), nums.end(), greater<int>());

    // Initialize variable to store the sum of all elements
    int totalSum = 0;

    // Iterate through each element in the array to calculate total sum
    for (int num : nums)
      totalSum += num;

    // Track sum of the current subsequence
    int subsequenceSum = 0;

    // Vector to store the resulting subsequence
    vector<int> result;

    // Iterate through sorted array from largest to smallest
    for (int i = 0; i < nums.size(); i++) {
      // Add current element to subsequence sum
      subsequenceSum += nums[i];

      // Add current element to result vector
      result.push_back(nums[i]);

      // If subsequence sum exceeds remaining sum, return result
      if (subsequenceSum > totalSum - subsequenceSum)
        return result;
    }

    // Return the result (should not reach here under normal conditions)
    return result;
  }
};
