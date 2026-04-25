/**
 * Problem: 3467. Transform Array by Parity
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> transformArray(vector<int> &nums) {
    // Iterate through each element in the array
    for (int i = 0; i < nums.size(); i++) {
      // If number is even, replace with 0
      if (nums[i] % 2 == 0)
        nums[i] = 0;
      // If number is odd, replace with 1
      else
        nums[i] = 1;
    }

    // Sort the transformed array and return
    sort(nums.begin(), nums.end());

    // Return the sorted transformed array
    return nums;
  }
};
