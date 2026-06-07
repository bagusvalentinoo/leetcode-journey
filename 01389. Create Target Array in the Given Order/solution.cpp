/**
 * Problem: 1389. Create Target Array in the Given Order
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
  vector<int> createTargetArray(vector<int> &nums, vector<int> &index)
  {
    // Initialize vector to store target array
    vector<int> targetArray;

    // Iterate through each element and insert at specified index
    for (int i = 0; i < nums.size(); i++)
      targetArray.insert(targetArray.begin() + index[i], nums[i]);

    // Return the final target array
    return targetArray;
  }
};
