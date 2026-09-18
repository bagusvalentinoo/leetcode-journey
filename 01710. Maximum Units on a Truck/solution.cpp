/**
 * Problem: 1710. Maximum Units on a Truck
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int maximumUnits(vector<vector<int>> &boxTypes, int truckSize) {
    // Sort box types by units per box in descending order
    sort(
        boxTypes.begin(), boxTypes.end(),
        [](const vector<int> &a, const vector<int> &b) { return a[1] > b[1]; });

    // Track remaining capacity and total units loaded
    int remaining = truckSize, totalUnits = 0;

    // Take boxes greedily starting from highest-unit type
    for (auto &boxType : boxTypes) {
      // Take as many boxes of this type as fit
      int take = min(remaining, boxType[0]);

      // Add units from taken boxes to total
      totalUnits += take * boxType[1];
      // Reduce remaining truck capacity
      remaining -= take;

      // Stop when truck is full
      if (remaining == 0)
        break;
    }

    // Return the maximum total units loaded on truck
    return totalUnits;
  }
};
