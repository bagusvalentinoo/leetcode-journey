/**
 * Problem: 1566. Detect Pattern of Length M Repeated K or More Times
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool containsPattern(vector<int> &arr, int m, int k) {
    // Early return if array is too short to contain k repetitions
    if ((int)arr.size() < m * k)
      return false;

    // Target consecutive matches needed: (k - 1) * m
    int target = (k - 1) * m;

    // Counter for consecutive positions where arr[i] == arr[i - m]
    int count = 0;

    // Scan array starting from index m
    for (int i = m; i < (int)arr.size(); i++) {
      // Check if current element matches the element m positions before
      if (arr[i] == arr[i - m]) {
        // Increment consecutive match counter
        count++;

        // Pattern found when enough consecutive matches accumulated
        if (count == target)
          return true;
      }
      // Reset counter when the consecutive pattern breaks
      else
        count = 0;
    }

    // No valid pattern found after full scan
    return false;
  }
};
