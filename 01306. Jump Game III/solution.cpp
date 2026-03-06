/**
 * Problem: 1306. Jump Game III
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool canReach(vector<int> &arr, int start) {
    // Depth-first search to explore possible jumps
    return dfs(arr, start);
  }

private:
  bool dfs(vector<int> &arr, int index) {
    // Stop if index out of bounds or already visited
    if (index < 0 || index >= arr.size() || arr[index] == -1)
      return false;
    // Return true if current value is zero
    if (arr[index] == 0)
      return true;

    // Get the jump value
    int jumpValue = arr[index];

    // Mark current index as visited (using -1 to indicate visited)
    arr[index] = -1;

    // Try jumping left and right
    return dfs(arr, index - jumpValue) || dfs(arr, index + jumpValue);
  }
};
