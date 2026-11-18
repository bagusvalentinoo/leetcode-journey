/**
 * Problem: 2441. Largest Positive Integer That Exists With Its Negative
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int findMaxK(vector<int> &nums) {
    // Create a bit flag table for positive and negative presence up to 1000
    array<uint8_t, 1001> signFlags{};
    // Initialize maxK to -1 for the no valid pair case
    int maxK = -1;

    // Iterate through numbers to build sign presence flags
    for (const int &x : nums) {
      // Get absolute value as the index
      int idx = abs(x);
      // Set bit 1 for positive and bit 2 for negative
      signFlags[idx] |= (x > 0) ? 1 : 2;

      // Update maxK when both signs are present and idx is larger
      if (signFlags[idx] == 3 && idx > maxK)
        maxK = idx;
    }

    // Return the largest k found or -1 when no valid pair exists
    return maxK;
  }
};
