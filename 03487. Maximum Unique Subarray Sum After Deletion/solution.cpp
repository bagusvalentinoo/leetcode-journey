/**
 * Problem: 3487. Maximum Unique Subarray Sum After Deletion
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int maxSum(vector<int> &nums) {
    // Set to store unique positive numbers
    unordered_set<int> uniquePositives;

    // Sum of unique positive numbers
    int totalSum = 0;

    // Iterate through each number in the array
    for (const int &num : nums) {
      // If number is positive and not already in the set
      if ((num > 0) && !uniquePositives.contains(num)) {
        // Add to set
        uniquePositives.insert(num);
        // Add to sum
        totalSum += num;
      }
    }

    // If no positive numbers found, return the maximum element (which will be
    // negative)
    if (!totalSum)
      totalSum = *max_element(nums.begin(), nums.end());

    // Return the result
    return totalSum;
  }
};
