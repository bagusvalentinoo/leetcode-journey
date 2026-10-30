/**
 * Problem: 2180. Count Integers With Even Digit Sum
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countEven(int num) {
    // Initialize digit sum accumulator and temporary variable
    int digitSum = 0, temp = num;

    // Extract each digit and accumulate the sum
    while (temp > 0) {
      digitSum += temp % 10;
      temp /= 10;
    }

    // Return count based on parity of the digit sum
    return digitSum % 2 == 0 ? num / 2 : (num - 1) / 2;
  }
};
