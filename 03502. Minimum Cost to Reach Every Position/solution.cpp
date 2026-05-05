/**
 * Problem: 3502. Minimum Cost to Reach Every Position
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> minCosts(vector<int> &cost) {
    // Initialize result vector with same size as input
    vector<int> minimumCosts(cost.size());

    // Fill result vector with running minimum
    for (int i = 0; i < minimumCosts.size(); i++)
      // Current minimum is the smaller of:
      // - Previous minimum (if exists)
      // - Current cost value
      minimumCosts[i] = min(i > 0 ? minimumCosts[i - 1] : INT_MAX, cost[i]);

    // Return array of minimum costs to reach each position
    return minimumCosts;
  }
};
