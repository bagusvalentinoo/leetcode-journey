/**
 * Problem: 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minPartitions(const string &n) {
    // Track maximum digit found in the string
    uint8_t maxDigit = 0;

    // Iterate through each character in the string
    for (const char digit : n)
      // Update maxDigit if current digit is larger
      maxDigit = digit > maxDigit ? digit : maxDigit;

    // Convert ASCII digit to integer and return
    return maxDigit - '0';
  }
};
