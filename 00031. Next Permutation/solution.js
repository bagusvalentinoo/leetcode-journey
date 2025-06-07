/**
 * Problem: 31. Next Permutation
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Rearranges numbers to create the next lexicographically greater permutation in-place
 *
 * @param {number[]} nums - Array to modify
 *
 * @returns {void} - Modifies the input array in-place
 */
const nextPermutation = (nums) => {
  // Start from second-to-last element
  let pivotIndex = nums.length - 2

  // Find the first element that breaks descending order from right
  while (pivotIndex >= 0 && nums[pivotIndex] >= nums[pivotIndex + 1])
    pivotIndex--

  if (pivotIndex >= 0) {
    // Find the smallest element larger than pivot
    let swapIndex = nums.length - 1
    while (nums[swapIndex] <= nums[pivotIndex])
      swapIndex--
      // Swap the pivot with this element
    ;[nums[pivotIndex], nums[swapIndex]] = [nums[swapIndex], nums[pivotIndex]]
  }

  // Reverse the subarray after pivotIndex to get smallest permutation
  let startIndex = pivotIndex + 1
  let endIndex = nums.length - 1

  while (startIndex < endIndex) {
    ;[nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]]
    startIndex++
    endIndex--
  }
}
