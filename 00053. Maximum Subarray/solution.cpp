/**
 * Problem: 53. Maximum Subarray
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int maxSubArray(vector<int> &nums) {
    // Initialize max sum with first element
    int maxSum = nums[0];

    // Initialize current running sum with first element
    int currentSum = nums[0];

    // Iterate through the array starting from index 1
    for (int i = 1; i < nums.size(); i++) {
      // Either start new subarray at current element or extend existing
      // subarray
      currentSum = max(nums[i], currentSum + nums[i]);
      // Update global maximum sum
      maxSum = max(maxSum, currentSum);
    }

    // Return maximum subarray sum
    return maxSum;
  }
};
