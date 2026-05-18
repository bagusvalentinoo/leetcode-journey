/**
 * Problem: 3340. Check Balanced String
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool isBalanced(string num) {
    // Array to store sums: index 0 for even positions, index 1 for odd
    // positions
    int digitSums[2] = {0, 0};

    // Iterate through each character in the string
    for (int position = 0; position < num.length(); position++)
      // Add digit to appropriate sum based on parity of index
      digitSums[position % 2] += num[position] - '0';

    // Return true if sums at even and odd indices are equal
    return digitSums[0] == digitSums[1];
  }
};
