/**
 * Problem: 2078. Two Furthest Houses With Different Colors
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int maxDistance(vector<int> &colors) {
    // Get length of colors array
    int length = colors.size();

    // Check from start to find first color that differs from end or start
    for (int i = 0; i < length; i++) {
      // If current color differs from last color or first color
      if ((colors[i] ^ colors[length - 1]) |
          (colors[length - 1 - i] ^ colors[0]))
        // Return the maximum distance
        return length - 1 - i;
    }

    // Fallback return (should not reach here)
    return 0;
  }
};
