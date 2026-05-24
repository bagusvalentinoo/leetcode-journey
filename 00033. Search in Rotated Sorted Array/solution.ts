/**
 * Problem: 33. Search in Rotated Sorted Array
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Search for target in rotated sorted array
 *
 * @param nums - The rotated sorted array
 * @param target - Value to search for
 *
 * @returns Index of target or -1 if not found
 */
const search = (nums: number[], target: number): number => {
  // Initialize left and right pointers for binary search
  let leftPointer: number = 0
  let rightPointer: number = nums.length - 1

  // Perform binary search while pointers haven't crossed
  while (leftPointer <= rightPointer) {
    // Calculate middle index
    const middleIndex: number = Math.floor((leftPointer + rightPointer) / 2)

    // If middle element is target, return its index
    if (nums[middleIndex] === target) return middleIndex

    // Check if left half is sorted (no rotation break in left half)
    if (nums[leftPointer] <= nums[middleIndex]) {
      // If target lies within the sorted left half, search left
      if (nums[leftPointer] <= target && target < nums[middleIndex])
        rightPointer = middleIndex - 1
      // Otherwise, search right half
      else leftPointer = middleIndex + 1
    }
    // Right half must be sorted (rotation break in left half)
    else {
      // If target lies within the sorted right half, search right
      if (nums[middleIndex] < target && target <= nums[rightPointer])
        leftPointer = middleIndex + 1
      // Otherwise, search left half
      else rightPointer = middleIndex - 1
    }
  }

  // Target not found
  return -1
}
