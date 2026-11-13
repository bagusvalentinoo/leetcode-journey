/**
 * Problem: 2389. Longest Subsequence With Limited Sum
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

import "sort"

func answerQueries(nums []int, queries []int) []int {
  // Sort values so each shortest subsequence has the smallest possible sum
  sort.Ints(nums)

  // Build prefix sums for every possible subsequence length
  prefixSums := make([]int, len(nums)+1)

  // Append the sum of the smallest elements through each position
  for i, num := range nums {
    prefixSums[i+1] = prefixSums[i] + num
  }

  // Store the maximum valid length for every query
  answer := make([]int, len(queries))

  // Process each sum limit independently
  for i, query := range queries {
    // Initialize the search with zero through all available elements
    left, right := 0, len(nums)

    // Binary search for the final prefix sum within the limit
    for left < right {
      // Test the upper middle length to retain a valid candidate
      middle := (left + right + 1) / 2

      // Keep this length when its smallest possible sum fits the limit
      if prefixSums[middle] <= query {
        left = middle
      } else {
        // Otherwise, search shorter subsequences
        right = middle - 1
      }
    }

    // Record the number of selected elements
    answer[i] = left
  }

  // Return the maximum valid lengths
  return answer
}
