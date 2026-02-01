/**
 * Problem: 3010. Divide an Array Into Subarrays With Minimum Cost I
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    int minimumCost(vector<int>& nums) {
        // Get array length
        int arrayLength = nums.size();
        
        // Initialize answer with maximum possible value
        int minCost = INT_MAX;
        
        // Try all pairs of elements (excluding first element)
        for (int i = 1; i < arrayLength - 1; i++)
            for (int j = i + 1; j < arrayLength; j++)
                // Calculate cost for current pair
                minCost = min(minCost, nums[0] + nums[i] + nums[j]);
        
        // Return minimum cost found
        return minCost;
    }
};
