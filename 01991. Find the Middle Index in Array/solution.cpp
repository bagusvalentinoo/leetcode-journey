/**
 * Problem: 1991. Find the Middle Index in Array
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int findMiddleIndex(vector<int> &nums) {
    // Compute the total sum of all array elements
    int totalSum = 0;
    for (int num : nums)
      totalSum += num;

    // Track the accumulated sum of elements to the left of the current index
    int leftSum = 0;

    // Scan each index from left to right
    for (int i = 0; i < (int)nums.size(); i++) {
      // Derive the right sum by excluding left sum and current element from
      // total
      int rightSum = totalSum - leftSum - nums[i];

      // Return the first index where left and right sums match
      if (leftSum == rightSum)
        return i;

      // Include the current element in the left sum for the next index
      leftSum += nums[i];
    }

    // Return -1 when no middle index satisfies the condition
    return -1;
  }
};
