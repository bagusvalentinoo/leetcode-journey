/**
 * Problem: 33. Search in Rotated Sorted Array
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func search(nums []int, target int) int {
  // Initialize pointers for binary search
  start := 0
  end := len(nums) - 1

  for start <= end {
    // Calculate middle index
    middle := (start + end) / 2

    // Return if target is found
    if nums[middle] == target {
      return middle
    }

    // Check if left side is sorted
    if nums[start] <= nums[middle] {
      // Check if target is in the sorted left half
      if nums[start] <= target && target < nums[middle] {
        end = middle - 1
      } else {
        start = middle + 1
      }
    } else {
      // Check if target is in the sorted right half
      if nums[middle] < target && target <= nums[end] {
        start = middle + 1
      } else {
        end = middle - 1
      }
    }
  }

  // Target not found
  return -1
}