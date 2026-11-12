/**
 * Problem: 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func longestMonotonicSubarray(nums []int) int {
  // Track the lengths ending at the current element for both directions
  increasingLength, decreasingLength, longestLength := 1, 1, 1

  // Compare each element with its predecessor
  for i := 1; i < len(nums); i++ {
    // Extend or reset the increasing sequence
    if nums[i] > nums[i-1] {
      increasingLength++
    } else {
      increasingLength = 1
    }

    // Extend or reset the decreasing sequence
    if nums[i] < nums[i-1] {
      decreasingLength++
    } else {
      decreasingLength = 1
    }

    // Keep the longest sequence seen so far
    if increasingLength > longestLength {
      longestLength = increasingLength
    }
    if decreasingLength > longestLength {
      longestLength = decreasingLength
    }
  }

  // Return the longest monotonic subarray length
  return longestLength
}
