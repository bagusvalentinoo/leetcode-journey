/**
 * Problem: 2057. Smallest Index With Equal Value
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func smallestEqual(nums []int) int {
  // Check each index in ascending order to find the smallest match
  for i := 0; i < len(nums); i++ {
    // Return the first index whose last digit equals its value
    if i%10 == nums[i] {
      return i
    }
  }

  // Return -1 when no index satisfies the condition
  return -1
}
