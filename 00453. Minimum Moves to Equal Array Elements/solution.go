/**
 * Problem: 453. Minimum Moves to Equal Array Elements
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minMoves(nums []int) int {
  // Find minimum value in array
  minVal := nums[0]
  sum := 0

  // Accumulate total sum and find minimum element
  for _, num := range nums {
    if num < minVal {
      minVal = num
    }
    sum += num
  }

  // Each move of incrementing n-1 elements is equivalent to decrementing 1 element
  return sum - len(nums)*minVal
}
