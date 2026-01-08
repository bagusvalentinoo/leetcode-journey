/**
 * Problem: 1975. Maximum Matrix Sum
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    long long maxMatrixSum(vector<vector<int>>& matrix) {
        // Initialize variables
        long long sum = 0;  // Total sum of absolute values
        int neg = 0;        // Count of negative numbers
        int mn = INT_MAX;   // Minimum absolute value found
        
        // Iterate through all elements in the matrix
        for (auto &row : matrix) {
            for (int x : row) {
                // Count negative numbers
                if (x < 0) neg++;
                // Add absolute value to total sum
                sum += llabs(x);
                // Update minimum absolute value
                mn = min(mn, abs(x));
            }
        }
        
        // If odd number of negatives, subtract twice the minimum absolute value
        // (flip smallest value to negative to minimize loss)
        if (neg % 2) sum -= 2LL * mn;
        
        // Return maximum possible sum
        return sum;
    }
};
