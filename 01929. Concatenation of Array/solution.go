/**
 * Problem: 1929. Concatenation of Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func getConcatenation(nums []int) []int {
  // Store the length of the input array
  n := len(nums)

  // Create result slice with double the input length
  answer := make([]int, 2*n)

  // Copy each element into both halves of the result
  for i := 0; i < n; i++ {
    answer[i] = nums[i]
    answer[i+n] = nums[i]
  }

  // Return the concatenated slice
  return answer
}
