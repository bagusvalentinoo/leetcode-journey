/**
 * Problem: 1837. Sum of Digits in Base K
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int sumBase(int n, int k) {
    // Accumulate base-k digits
    int digitSum = 0;

    // Extract least significant digit until n is consumed
    while (n > 0) {
      // Add current remainder as the next base-k digit
      digitSum += n % k;

      // Drop the processed digit
      n /= k;
    }

    // Return total of base-k digits
    return digitSum;
  }
};
