/**
 * Problem: 2778. Sum of Squares of Special Elements
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int sumOfSquares(vector<int> &nums) {
    // Store array length for divisibility checks
    int n = nums.size();

    // Accumulate sum of squares of special elements
    int total = 0;

    // Iterate through array with 0-based index
    for (int i = 0; i < n; i++) {
      // Check if 1-indexed position divides array length, add its square
      if (n % (i + 1) == 0)
        total += nums[i] * nums[i];
    }

    // Return the accumulated sum of squares
    return total;
  }
};
