/**
 * Problem: 1888. Minimum Number of Flips to Make the Binary String Alternating
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minFlips(string s) {
    // Length of the input string
    const int sLength = s.length();

    // Count mismatches when starting with '0' at even positions
    int mismatchesForPattern0 = 0;

    // Count mismatches for pattern 0 across all positions
    for (int index = 0; index < sLength; ++index)
      // Check if current char matches expected pattern
      // Expected: '0' for even indices, '1' for odd indices
      mismatchesForPattern0 += s[index] == ('0' + (index & 1));

    // Minimum flips between pattern 0 and opposite pattern
    int minFlips = min(mismatchesForPattern0, sLength - mismatchesForPattern0);

    // If length is even, result is same for all rotations
    if (!(sLength & 1))
      return minFlips;

    // Try all rotations of the string (only matters for odd length)
    for (int index = 0; index < sLength; ++index) {
      // Update mismatches count after rotating to next position
      // Formula derived from rotation effect on pattern matching
      mismatchesForPattern0 =
          sLength - 1 - mismatchesForPattern0 + 2 * (s[index] == '0');

      // Update minimum flips with current and opposite pattern counts
      minFlips = min(
          {minFlips, mismatchesForPattern0, sLength - mismatchesForPattern0});
    }

    // Return the minimum flips needed across all rotations
    return minFlips;
  }
};
