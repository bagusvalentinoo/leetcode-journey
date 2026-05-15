/**
 * Problem: 3427. Sum of Variable Length Subarrays
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int subarraySum(vector<int> &nums) {
    // Initialize total sum accumulator
    int totalSum = 0;

    // Length of the input array
    int arrayLength = nums.size();

    // Iterate through each element as the end index of subarray
    for (int endIndex = 0; endIndex < arrayLength; endIndex++) {
      // Calculate start index, ensuring it's not negative
      int startIndex = max(0, endIndex - nums[endIndex]);

      // Add all elements from startIndex to endIndex to total sum
      for (int currentIndex = startIndex; currentIndex <= endIndex;
           currentIndex++)
        totalSum += nums[currentIndex];
    }

    // Return the final total sum
    return totalSum;
  }
};
