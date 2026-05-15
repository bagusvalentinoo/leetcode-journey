/**
 * Problem: 153. Find Minimum in Rotated Sorted Array
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int findMin(vector<int> &nums) {
    // Initialize left and right pointer to start and end of array
    int leftPointer = 0;
    int rightPointer = nums.size() - 1;

    // Binary search to find the minimum element
    while (leftPointer < rightPointer) {
      // Calculate middle index
      int middleIndex = leftPointer + (rightPointer - leftPointer) / 2;

      // If middle element is greater than rightmost element,
      // minimum is in the right half
      if (nums[middleIndex] > nums[rightPointer])
        leftPointer = middleIndex + 1;
      // Otherwise, minimum is in the left half (including middle)
      else
        rightPointer = middleIndex;
    }

    // Return the minimum element
    return nums[leftPointer];
  }
};
