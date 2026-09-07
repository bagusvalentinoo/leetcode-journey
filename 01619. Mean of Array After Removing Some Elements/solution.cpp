/**
 * Problem: 1619. Mean of Array After Removing Some Elements
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  double trimMean(vector<int> &arr) {
    // Sort array in ascending order
    sort(arr.begin(), arr.end());

    // Number of elements to remove from each end (5%)
    int trim = arr.size() / 20;

    // Accumulate sum of middle elements
    double sum = 0;

    // Loop over middle 90% excluding smallest and largest 5%
    for (int i = trim; i < (int)arr.size() - trim; i++)
      sum += arr[i];

    // Return mean of remaining elements
    return sum / (arr.size() - trim * 2);
  }
};
