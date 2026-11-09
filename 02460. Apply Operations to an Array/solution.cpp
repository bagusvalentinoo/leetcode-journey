/**
 * Problem: 2460. Apply Operations to an Array
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> applyOperations(vector<int> &nums) {
    // Apply each adjacent operation sequentially
    for (int i = 0; i < nums.size() - 1; i++) {
      // Double equal adjacent values and clear the right value
      if (nums[i] == nums[i + 1]) {
        nums[i] *= 2;
        nums[i + 1] = 0;
      }
    }

    // Track the next position for a non-zero value
    int writeIndex = 0;

    // Move non-zero values to the front in their original order
    for (int number : nums)
      if (number != 0)
        nums[writeIndex++] = number;

    // Fill the remaining positions with zeros
    while (writeIndex < nums.size())
      nums[writeIndex++] = 0;

    // Return the transformed array
    return nums;
  }
};
