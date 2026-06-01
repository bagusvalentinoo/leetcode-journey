/**
 * Problem: 1374. Generate a String With Characters That Have Odd Counts
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  string generateTheString(int n)
  {
    // If n is odd, we can use all 'a's
    if (n % 2 == 1)
      return string(n, 'a');

    // If n is even, use (n-1) 'a's and one 'b'
    return string(n - 1, 'a') + 'b';
  }
};
