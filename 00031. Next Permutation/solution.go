/**
 * Problem: 31. Next Permutation
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func nextPermutation(nums []int) {
  // Start from second-to-last element
  pivotIndex := len(nums) - 2

  // Find the first element that breaks descending order from right
  for pivotIndex >= 0 && nums[pivotIndex] >= nums[pivotIndex+1] {
    pivotIndex--
  }

  if pivotIndex >= 0 {
    // Find the smallest element larger than pivot
    swapIndex := len(nums) - 1
    for nums[swapIndex] <= nums[pivotIndex] {
      swapIndex--
    }
    // Swap the pivot with this element
    nums[pivotIndex], nums[swapIndex] = nums[swapIndex], nums[pivotIndex]
  }

  // Reverse the subarray after pivotIndex to get smallest permutation
  startIndex := pivotIndex + 1
  endIndex := len(nums) - 1

  for startIndex < endIndex {
    nums[startIndex], nums[endIndex] = nums[endIndex], nums[startIndex]
    startIndex++
    endIndex--
  }
}
