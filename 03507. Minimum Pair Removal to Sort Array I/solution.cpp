/**
 * Problem: 3507. Minimum Pair Removal to Sort Array I
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    int minPair(vector<int> v) {
        // Initialize minimum sum
        int minSum = 1e9;

        // Initialize position index
        int pos = -1;

        // Find pair with minimum sum
        for (int i = 0; i < (int)v.size() - 1; i++) {
            // Check if current pair has smaller sum
            if (v[i] + v[i + 1] < minSum) {
                // Update minimum sum
                minSum = v[i] + v[i + 1];

                // Update position index
                pos = i;
            }
        }

        // Return position of minimum sum pair
        return pos;
    }

    void mergePair(vector<int>& v, int pos) {
        // Merge pair at given position
        v[pos] += v[pos + 1];

        // Remove second element of pair
        v.erase(v.begin() + pos + 1);
    }

    int minimumPairRemoval(vector<int>& nums) {
        // Initialize operations counter
        int ops = 0;

        // Continue until array is sorted
        while (!is_sorted(nums.begin(), nums.end())) {
            // Merge minimum sum pair
            mergePair(nums, minPair(nums));

            // Increment operations counter
            ops += 1;
        }

        // Return total operations performed
        return ops;
    }
};
