/**
 * Problem: 3512. Minimum Operations to Make Array Sum Divisible by K
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minOperations(vector<int> &nums, int k) {
    // Initialize sum accumulator
    int totalSum = 0;

    // Calculate sum of all elements in the array
    for (int currentValue : nums)
      totalSum += currentValue;

    // Return remainder of total sum divided by k
    return totalSum % k;
  }
};
