/**
 * Problem: 1848. Minimum Distance to the Target Element
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int getMinDistance(vector<int> &nums, int target, int start) {
    // Initialize minimum distance to maximum value
    int minDistance = INT_MAX;

    // Iterate through the array
    for (int i = 0; i < nums.size(); i++) {
      // Check if current element matches target
      if (nums[i] == target) {
        // Update minimum distance with absolute difference from start
        minDistance = min(minDistance, abs(i - start));
      }
    }

    // Return minimum distance
    return minDistance;
  }
};
