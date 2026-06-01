/**
 * Problem: 2144. Minimum Cost of Buying Candies With Discount
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
  int minimumCost(vector<int> &cost)
  {
    // Sort costs in descending order (highest to lowest)
    sort(cost.begin(), cost.end(), greater<int>());

    // Initialize total sum accumulator
    int totalSum = 0;

    // Iterate through array in steps of 3 (take 2, skip 1)
    for (int i = 0; i < cost.size(); i += 3)
    {
      // Add the first item of each group (most expensive in that group)
      totalSum += cost[i];

      // If there is a second item in the group, add it to the total sum
      if (i + 1 < cost.size())
        totalSum += cost[i + 1];
    }

    // Return the calculated total cost
    return totalSum;
  }
};
