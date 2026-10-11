/**
 * Problem: 2778. Sum of Squares of Special Elements
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sumOfSquares(nums []int) int {
  // Store array length for divisibility checks
  n := len(nums)

  // Accumulate sum of squares of special elements
  total := 0

  // Iterate through array with 0-based index
  for i := 0; i < n; i++ {
    // Check if 1-indexed position divides array length, add its square
    if n%(i+1) == 0 {
      total += nums[i] * nums[i]
    }
  }

  // Return the accumulated sum of squares
  return total
}
