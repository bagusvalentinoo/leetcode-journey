/**
 * Problem: 1758. Minimum Changes To Make Alternating Binary String
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minOperations(string s) {
    // Count differences from starting with '0' at even positions
    int differences = 0;

    // Get string length
    int length = s.length();

    // Check each character position
    for (int i = 0; i < length; i++)
      // Compare current character with expected pattern
      // Even positions should be '0', odd positions should be '1'
      if ((s[i] - '0') != (i % 2 == 0 ? 0 : 1))
        differences++;

    // Minimum between starting with '0' at even vs '1' at even
    return min(differences, length - differences);
  }
};
