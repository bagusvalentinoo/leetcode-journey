/**
 * Problem: 1502. Can Make Arithmetic Progression From Sequence
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool canMakeArithmeticProgression(vector<int> &arr) {
    // Sort array to arrange elements in ascending order
    sort(arr.begin(), arr.end());

    // Calculate common difference from first two elements
    int commonDifference = arr[1] - arr[0];

    // Check if every consecutive pair has the same difference
    for (int i = 2; i < arr.size(); i++)
      // If any difference differs, it cannot form an arithmetic progression
      if (arr[i] - arr[i - 1] != commonDifference) return false;

    // All differences match, array forms an arithmetic progression
    return true;
  }
};
