/**
 * Problem: 2367. Number of Arithmetic Triplets
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int arithmeticTriplets(vector<int> &nums, int diff) {
    // Store every value for constant-time triplet membership checks
    unordered_set<int> values(nums.begin(), nums.end());

    // Count values that can serve as the last element of a triplet
    int triplets = 0;

    // Check whether each value has both required preceding values
    for (int number : nums) {
      if (values.find(number - diff) != values.end() &&
          values.find(number - 2 * diff) != values.end())
        triplets++;
    }

    // Return the number of valid arithmetic triplets
    return triplets;
  }
};
