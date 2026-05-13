/**
 * Problem: 3432. Count Partitions with Even Sum Difference
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countPartitions(vector<int> &nums) {
    // Get the length of the input array
    int arrayLength = nums.size();

    // Initialize total sum
    int totalSum = 0;

    // Calculate total sum of all elements in the array
    for (int num : nums)
      totalSum += num;

    // If total sum is odd, no partition can have equal sums
    if (totalSum % 2 != 0)
      return 0;

    // Return number of possible split positions (n-1)
    return arrayLength - 1;
  }
};
