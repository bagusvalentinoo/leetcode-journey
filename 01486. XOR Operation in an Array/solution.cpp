/**
 * Problem: 1486. XOR Operation in an Array
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
  int xorOperation(int n, int start)
  {
    // Initialize result with first element
    int xorResult = start;

    // XOR all subsequent elements (start + 2 * i)
    for (int i = 1; i < n; i++)
      xorResult ^= start + 2 * i;

    // Return the final XOR result
    return xorResult;
  }
};
