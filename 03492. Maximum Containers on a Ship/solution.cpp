/**
 * Problem: 3492. Maximum Containers on a Ship
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int maxContainers(int n, int w, int maxWeight) {
    // Calculate maximum containers based on grid size
    int maxByGrid = n * n;

    // Calculate maximum containers based on weight capacity
    int maxByWeight = maxWeight / w;

    // Return the smaller value
    return min(maxByGrid, maxByWeight);
  }
};
