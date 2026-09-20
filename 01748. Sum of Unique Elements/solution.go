/**
 * Problem: 1748. Sum of Unique Elements
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sumOfUnique(nums []int) int {
  // Initialize frequency array for values 0 to 100
  frequency := make([]int, 101)

  // Count occurrences of each number
  for _, num := range nums {
    frequency[num]++
  }

  // Store sum of unique elements
  answer := 0

  // Add values that appear exactly once
  for num := 1; num <= 100; num++ {
    // Check if current value is unique
    if frequency[num] == 1 {
      answer += num
    }
  }

  // Return the sum of all unique elements
  return answer
}
