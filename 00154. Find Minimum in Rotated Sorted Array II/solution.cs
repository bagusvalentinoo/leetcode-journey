/**
 * Problem: 154. Find Minimum in Rotated Sorted Array II
 *
 * Difficulty: Hard
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int FindMin(int[] nums)
  {
    // Initialize left pointer to the start of the array
    int leftPointer = 0;
    // Initialize right pointer to the end of the array
    int rightPointer = nums.Length - 1;

    // Perform binary search to find the minimum element
    while (leftPointer < rightPointer)
    {
      // Calculate the middle index
      int middleIndex = (leftPointer + rightPointer) / 2;

      // If middle element is greater than rightmost element,
      // minimum lies in the right half
      if (nums[middleIndex] > nums[rightPointer])
        leftPointer = middleIndex + 1;
      // If middle element is less than leftmost element,
      // minimum lies in the left half
      else if (nums[middleIndex] < nums[leftPointer])
        rightPointer = middleIndex;
      // If elements are equal, decrement right pointer to narrow down
      else
        rightPointer--;
    }

    // Return the minimum element found
    return nums[leftPointer];
  }
}
