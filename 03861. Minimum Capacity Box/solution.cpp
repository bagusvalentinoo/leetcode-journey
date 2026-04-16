/**
 * Problem: 3861. Minimum Capacity Box
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minimumIndex(vector<int> &capacity, int itemSize) {
    // Initialize smallest valid capacity to maximum possible integer value
    int smallestValidCapacity = INT_MAX;

    // Find the smallest capacity that meets or exceeds itemSize
    for (int x : capacity) {
      // Check if current capacity is large enough and smaller than current
      // minimum
      if (x >= itemSize && x < smallestValidCapacity)
        smallestValidCapacity = x;
    }

    // Initialize result index to -1 (not found)
    int resultIndex = -1;

    // Find the index of the smallest valid capacity
    for (int i = 0; i < capacity.size(); i++) {
      // Check if current element matches the smallest valid capacity
      if (capacity[i] == smallestValidCapacity) {
        // Store the index
        resultIndex = i;

        // Exit loop once found (first occurrence)
        break;
      }
    }

    // Return the index (or -1 if no valid capacity found)
    return resultIndex;
  }
};
