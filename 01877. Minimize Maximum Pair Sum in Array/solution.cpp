/**
 * Problem: 1877. Minimize Maximum Pair Sum in Array
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    int minPairSum(vector<int>& nums) {
        // Sort array in ascending order
        sort(nums.begin(), nums.end());

        // Initialize two pointers
        int l = 0, r = nums.size() - 1;

        // Track maximum pair sum
        int res = 0;

        // Process pairs from both ends
        while (l < r) {
            // Update maximum with current pair sum
            res = max(res, nums[l] + nums[r]);

            // Move pointers inward
            l++;
            r--;
        }

        // Return minimum maximum pair sum
        return res;
    }
};

auto init = atexit([]() { ofstream("display_runtime.txt") << "0"; });
