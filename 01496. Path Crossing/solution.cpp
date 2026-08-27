/**
 * Problem: 1496. Path Crossing
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool isPathCrossing(string path) {
    // Start at origin
    int x = 0, y = 0;

    // Track visited positions using hash set
    unordered_set<string> visited;

    // Add origin to visited set
    visited.insert("0,0");

    // Process each direction
    for (char dir : path) {
      // Move north: increment y coordinate
      if (dir == 'N')
        y++;
      // Move south: decrement y coordinate
      else if (dir == 'S')
        y--;
      // Move east: increment x coordinate
      else if (dir == 'E')
        x++;
      // Move west: decrement x coordinate
      else
        x--;

      // Create position key
      string pos = to_string(x) + "," + to_string(y);

      // Check if position already visited
      if (visited.count(pos))
        return true;

      // Mark position as visited
      visited.insert(pos);
    }

    // Path doesn't cross itself
    return false;
  }
};
