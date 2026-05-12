/**
 * Problem: 3452. Sum of Good Numbers
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int sumOfGoodNumbers(vector<int> &nums, int k) {
    // Initialize sum accumulator
    int totalSum = 0;

    // Length of the input array
    int arrayLength = nums.size();

    // Iterate through each element in the array
    for (int index = 0; index < arrayLength; index++) {
      // Check left neighbor at distance k
      if (index >= k && nums[index] <= nums[index - k])
        continue;
      // Check right neighbor at distance k
      if (index + k < arrayLength && nums[index] <= nums[index + k])
        continue;

      // Element is greater than both neighbors (or neighbors don't exist)
      totalSum += nums[index];
    }

    // Return sum of good numbers
    return totalSum;
  }
};
