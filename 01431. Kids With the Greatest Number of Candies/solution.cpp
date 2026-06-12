/**
 * Problem: 1431. Kids With the Greatest Number of Candies
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
  vector<bool> kidsWithCandies(vector<int> &candies, int extraCandies)
  {
    // Find the maximum candy count among all kids
    int maxCandyCount = *max_element(candies.begin(), candies.end());

    // Vector to store results
    vector<bool> result;

    // Check each kid: if adding extra candies reaches or exceeds the maximum, add true; otherwise add false
    for (int currentCandies : candies)
      result.push_back(currentCandies + extraCandies >= maxCandyCount);

    // Return the vector of boolean results
    return result;
  }
};
