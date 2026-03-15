/**
 * Problem: 1313. Decompress Run-Length Encoded List
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> decompressRLElist(vector<int> &nums) {
    // Initialize result vector to store decompressed values
    vector<int> result;

    // Iterate through each frequency-value pair (step by 2)
    for (int i = 0; i <= (int)nums.size() - 1; i += 2)
      // Repeat value (nums[i + 1]) frequency times (nums[i])
      for (int j = 0; j <= nums[i] - 1; j++)
        // Push current value to result vector
        result.push_back(nums[i + 1]);

    // Return fully decompressed list
    return result;
  }
};
