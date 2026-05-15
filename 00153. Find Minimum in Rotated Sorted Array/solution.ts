/**
 * Problem: 153. Find Minimum in Rotated Sorted Array
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum element in rotated sorted array
 *
 * @param nums - Rotated sorted array
 *
 * @returns Minimum element in the array
 */
const findMin = (nums: number[]): number => {
  // Initialize left and right pointer to start and end of array
  let leftPointer: number = 0
  let rightPointer: number = nums.length - 1

  // Binary search to find the minimum element
  while (leftPointer < rightPointer) {
    // Calculate middle index
    const middleIndex: number = Math.floor((leftPointer + rightPointer) / 2)

    // If middle element is greater than rightmost element,
    // minimum is in the right half
    if (nums[middleIndex] > nums[rightPointer]) leftPointer = middleIndex + 1
    // Otherwise, minimum is in the left half (including middle)
    else rightPointer = middleIndex
  }

  // Return the minimum element
  return nums[leftPointer]
}
