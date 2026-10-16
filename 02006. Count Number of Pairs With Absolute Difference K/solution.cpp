/**
 * Problem: 2006. Count Number of Pairs With Absolute Difference K
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countKDifference(vector<int> &nums, int k) {
    // Counter for pairs with absolute difference k
    int pairsCount = 0;

    // Check every pair starting at each index
    for (int i = 0; i < nums.size(); i++) {
      // Compare current element with every later element including itself
      for (int j = i; j < nums.size(); j++) {
        // Count the pair when the absolute difference equals k
        if (abs(nums[i] - nums[j]) == k)
          pairsCount++;
      }
    }

    // Return the total number of pairs with absolute difference k
    return pairsCount;
  }
};
