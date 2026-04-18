/**
 * Problem: 3783. Mirror Distance of an Integer
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int mirrorDistance(int n) {
    // Convert number to string
    string numStr = to_string(n);

    // Reverse the string
    reverse(numStr.begin(), numStr.end());

    // Convert back to integer
    int reversed = stoi(numStr);

    // Return the absolute difference between the original number and its mirror
    return abs(n - reversed);
  }
};
