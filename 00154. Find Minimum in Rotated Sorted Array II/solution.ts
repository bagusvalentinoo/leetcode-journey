/**
 * Problem: 154. Find Minimum in Rotated Sorted Array II
 *
 * Difficulty: Hard
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds min in rotated sorted array with duplicates
 *
 * @param nums - Rotated sorted array
 *
 * @returns Minimum element
 */
const findMin = (nums: number[]): number => {
  // Initialize left pointer to the start of the array
  let leftPointer: number = 0
  // Initialize right pointer to the end of the array
  let rightPointer: number = nums.length - 1

  // Perform binary search to find the minimum element
  while (leftPointer < rightPointer) {
    // Calculate the middle index
    const middleIndex: number = Math.floor((leftPointer + rightPointer) / 2)

    // If middle element is greater than rightmost element,
    // minimum lies in the right half
    if (nums[middleIndex] > nums[rightPointer]) leftPointer = middleIndex + 1
    // If middle element is less than leftmost element,
    // minimum lies in the left half
    else if (nums[middleIndex] < nums[leftPointer]) rightPointer = middleIndex
    // If elements are equal, decrement right pointer to narrow down
    else rightPointer--
  }

  // Return the minimum element found
  return nums[leftPointer]
}
