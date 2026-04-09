/**
 * Problem: 55. Jump Game
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool canJump(vector<int> &nums) {
    // If array has 0 or 1 element, already at last index
    if (nums.size() <= 1)
      return true;

    // Track the farthest reachable index so far
    int farthestReach = nums[0];

    // Iterate through each position
    for (int i = 0; i < nums.size(); i++) {
      // If we can't go further and current position is zero, stuck
      if (farthestReach <= i && nums[i] == 0)
        return false;
      // Update farthest reachable index from current position
      if (i + nums[i] > farthestReach)
        farthestReach = i + nums[i];
      // If we can reach or exceed last index, success
      if (farthestReach >= nums.size() - 1)
        return true;
    }

    // If loop finishes without reaching last index
    return false;
  }
};
