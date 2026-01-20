/**
 * Problem: 3314. Construct the Minimum Bitwise Array I
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    vector<int> minBitwiseArray(vector<int>& nums) {
        // Initialize result array
        vector<int> result(nums.size());

        // Process each number: if number is 2 return -1, else apply bitwise
        // transformation
        for (int i = 0; i < nums.size(); i++) {
            int currentNum = nums[i];

            // (n + 1) & (-n - 1) isolates rightmost zero bit pattern, divide by
            // 2 to get subtract value
            if (currentNum != 2)
                result[i] =
                    currentNum - ((currentNum + 1) & (-currentNum - 1)) / 2;
            else
                result[i] = -1;
        }

        // Return transformed array
        return result;
    }
};
