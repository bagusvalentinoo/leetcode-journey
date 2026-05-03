/**
 * Problem: 3560. Find Minimum Log Transportation Cost
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  long long minCuttingCost(int n, int m, int k) {
    // Find the longest log
    long long longest = std::max(n, m);

    // Return 0 if the longest log fits in a truck, otherwise calculate the cost
    return (longest <= k) ? 0 : k * (longest - k);
  }
};
