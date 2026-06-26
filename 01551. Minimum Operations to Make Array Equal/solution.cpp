/**
 * Problem: 1551. Minimum Operations to Make Array Equal
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int minOperations(int n)
  {
    // Calculate minimum operations using formula n * n / 4
    return (n * n) / 4;
  }
};
