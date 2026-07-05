/**
 * Problem: 1480. Running Sum of 1d Array
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  vector<int> runningSum(vector<int> &nums)
  {
    // Initialize output vector with same size as input
    vector<int> runningSumArray(nums.size());

    // First element remains unchanged
    runningSumArray[0] = nums[0];

    // Calculate running sum for remaining elements
    for (int index = 1; index < nums.size(); index++)
      // Add current element to previous running sum
      runningSumArray[index] = runningSumArray[index - 1] + nums[index];

    // Return the running sum vector
    return runningSumArray;
  }
};
