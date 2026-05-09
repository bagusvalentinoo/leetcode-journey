/**
 * Problem: 3471. Find the Largest Almost Missing Integer
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int largestInteger(vector<int> &nums, int k) {
    // Length of the input array
    int arrayLength = nums.size();

    // Counters for frequency of first and last elements
    int firstCount = 0, lastCount = 0;

    // First and last elements of the array
    int firstElement = nums[0], lastElement = nums[arrayLength - 1];

    // Case 1: k equals array length (only one subarray)
    if (arrayLength == k)
      return *max_element(nums.begin(), nums.end());

    // Case 2: k equals 1 (each subarray is a single element)
    if (k == 1) {
      // Map to store frequency of each number
      map<int, int> frequencyMap;

      // Variable to store maximum value
      int maxUniqueValue = -1;

      // Count occurrences of each number
      for (int i = 0; i < arrayLength; i++)
        frequencyMap[nums[i]]++;

      // Find largest number that appears exactly once
      for (auto &entry : frequencyMap) {
        // If number appears exactly once, update max
        if (entry.second == 1)
          maxUniqueValue = max(maxUniqueValue, entry.first);
      }

      // Return largest unique value
      return maxUniqueValue;
    }

    // Case 3: k is between 2 and n-1
    // Count frequency of first element
    for (int i = 0; i < arrayLength; i++) {
      if (firstElement == nums[i])
        firstCount++;

      // Count frequency of last element
      if (lastElement == nums[i])
        lastCount++;
    }

    // If both first and last appear more than once, no valid candidate
    if (firstCount > 1 && lastCount > 1)
      return -1;
    // If first appears more than once, return last element
    if (firstCount > 1)
      return lastElement;

    // If last appears more than once, return first element
    if (lastCount > 1)
      return firstElement;

    // Return maximum of first and last elements
    return max(firstElement, lastElement);
  }
};
