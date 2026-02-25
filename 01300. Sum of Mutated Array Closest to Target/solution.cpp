/**
 * Problem: 1300. Sum of Mutated Array Closest to Target
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int findBestValue(vector<int> &arr, int target) {
    // Get array length
    int arrayLength = arr.size();

    // Binary search boundaries
    int left = 0;
    int right = *max_element(arr.begin(), arr.end());

    // Track closest sum and corresponding value
    int smallestDiff = INT_MAX;
    int bestValue = 0;

    // Binary search for best value
    while (left <= right) {
      // Calculate mid value
      int mid = (left + right) >> 1;

      // Initialize total sum
      int currentSum = 0;

      // Iterate through array and add capped values to total sum
      for (int i = 0; i < arrayLength; i++)
        currentSum += arr[i] > mid ? mid : arr[i];

      // Calculate difference between current sum and target
      int currentDiff = abs(currentSum - target);

      // Update best result if current is better
      if (currentDiff < smallestDiff ||
          (currentDiff == smallestDiff && mid < bestValue)) {
        // Update best value
        bestValue = mid;
        // Update smallest difference
        smallestDiff = currentDiff;
      }

      // Adjust search range based on sum comparison
      if (currentSum < target)
        left = mid + 1;
      else
        right = mid - 1;
    }

    // Return best value
    return bestValue;
  }
};
