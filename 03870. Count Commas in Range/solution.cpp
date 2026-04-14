/**
 * Problem: 3870. Count Commas in Range
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  // Return the number of commas needed when writing all integers from 1 to n
  int countCommas(int n) { return max(0, n - 999); }
};
