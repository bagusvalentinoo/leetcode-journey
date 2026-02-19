/**
 * Problem: 1295. Find Numbers with Even Number of Digits
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    int findNumbers(vector<int>& nums) {
        // Count numbers where the number of digits is even
        return count_if(nums.begin(), nums.end(), [](int x) {
            // Calculate number of digits using log10
            // floor(log10(x)) + 1 gives the number of digits
            // Check if digits count is even using modulo
            return (int(floor(log10(x)) + 1) % 2 == 0);
        });
    }
};
