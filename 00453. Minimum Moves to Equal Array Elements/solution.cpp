/**
 * Problem: 453. Minimum Moves to Equal Array Elements
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minMoves(vector<int> &nums) {
    // Find minimum value in array
    int minVal = nums[0];
    long long sum = 0;

    // Accumulate total sum and find minimum element
    for (int num : nums) {
      if (num < minVal) minVal = num;
      sum += num;
    }

    // Each move of incrementing n-1 elements is equivalent to decrementing 1 element
    return sum - (long long)nums.size() * minVal;
  }
};
