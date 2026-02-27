/**
 * Problem: 1356. Sort Integers by The Number of 1 Bits
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> sortByBits(vector<int> &arr) {
    // Sort using custom comparator
    sort(arr.begin(), arr.end(), [](int a, int b) {
      // Count set bits for both numbers using built-in popcount
      int bitsA = __builtin_popcount(a), bitsB = __builtin_popcount(b);

      // If bit counts differ, sort by number of bits
      // If bit counts are equal, sort by numeric value
      return bitsA != bitsB ? bitsA < bitsB : a < b;
    });

    // Return sorted array
    return arr;
  }
};
