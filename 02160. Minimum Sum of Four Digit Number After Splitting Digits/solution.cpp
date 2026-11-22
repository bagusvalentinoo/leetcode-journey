/**
 * Problem: 2160. Minimum Sum of Four Digit Number After Splitting Digits
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minimumSum(int num) {
    // Sort the digits so the smallest two contribute to the tens places
    string digits = to_string(num);
    sort(digits.begin(), digits.end());

    // Return the sum of the two formed numbers
    return (digits[0] + digits[1] - '0' * 2) * 10 + digits[2] + digits[3] -
           '0' * 2;
  }
};
