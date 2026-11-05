/**
 * Problem: 2119. A Number After a Double Reversal
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool isSameAfterReversals(int num) {
    // A number retains all digits after double reversal if it is zero or has no
    // trailing zero
    return num == 0 || num % 10 != 0;
  }
};
