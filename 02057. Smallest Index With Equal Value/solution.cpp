/**
 * Problem: 2057. Smallest Index With Equal Value
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int smallestEqual(vector<int> &nums) {
    // Check each index in ascending order to find the smallest match
    for (int i = 0; i < nums.size(); i++) {
      // Return the first index whose last digit equals its value
      if (i % 10 == nums[i])
        return i;
    }

    // Return -1 when no index satisfies the condition
    return -1;
  }
};
