/**
 * Problem: 1995. Count Special Quadruplets
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countQuadruplets(vector<int> &nums) {
    // Store array length and initialize counter for valid quadruplets
    int count = 0, n = nums.size();
    // Track frequencies of values seen at indices after c
    int freq[401] = {0};

    // Iterate middle index c backwards to build suffix frequencies
    for (int c = n - 2; c >= 1; --c) {
      // Include the element just after c in the frequency table
      freq[nums[c + 1]]++;

      // Iterate middle index b before c
      for (int b = c - 1; b >= 0; --b) {
        // Compute partial sum of nums[b] and nums[c]
        int sumAbc = nums[b] + nums[c];

        // Iterate first index a before b
        for (int a = b - 1; a >= 0; --a) {
          // Compute full sum needed at index d
          int target = nums[a] + sumAbc;

          // Count matches only when target stays within frequency bounds
          if (target <= 400)
            count += freq[target];
        }
      }
    }

    // Return total count of special quadruplets
    return count;
  }
};
