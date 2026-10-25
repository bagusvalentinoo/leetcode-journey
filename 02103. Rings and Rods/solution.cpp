/**
 * Problem: 2103. Rings and Rods
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countPoints(string rings) {
    // Store a three-bit color mask for each rod.
    vector<int> rodColors(10);

    // Record each ring color on its corresponding rod.
    for (int i = 0; i < rings.size(); i += 2) {
      // Convert the color into its bit and the rod character into an index.
      int colorBit = rings[i] == 'R' ? 1 : rings[i] == 'G' ? 2 : 4;
      int rod = rings[i + 1] - '0';
      rodColors[rod] |= colorBit;
    }

    // Count rods whose mask contains every color bit.
    int count = 0;
    for (int colors : rodColors)
      if (colors == 7)
        count++;

    // Return the number of rods containing all three colors.
    return count;
  }
};
