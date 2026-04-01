/**
 * Problem: 1. Two Sum
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> twoSum(vector<int> &nums, int target) {
    // Unordered map to store the values and their indices
    unordered_map<int, int> temp;

    // Iterate through the array
    for (int i = 0; i < nums.size(); i++) {
      // Current value
      int value = nums[i];

      // If the current value is already in the map, return the indices
      if (temp.find(value) != temp.end()) {
        return {temp[value], i};
      }

      // Calculate the pair value
      int pair = value > 0 ? target - value : target + abs(value);
      // Store the pair value and its index in the map
      temp[pair] = i;
    }

    // Return empty vector if no solution found
    return {};
  }
};
