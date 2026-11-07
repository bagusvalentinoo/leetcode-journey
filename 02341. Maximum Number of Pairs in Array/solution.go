/**
 * Problem: 2341. Maximum Number of Pairs in Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numberOfPairs(nums []int) []int {
  // Track values waiting to be matched with an equal value
  unmatched := make(map[int]bool)

  // Count each completed pair
  pairs := 0

  // Match each number with an earlier unmatched equal number when possible
  for _, number := range nums {
    if unmatched[number] {
      delete(unmatched, number)
      pairs++
    } else {
      unmatched[number] = true
    }
  }

  // Return the completed pairs and remaining unmatched integers
  return []int{pairs, len(unmatched)}
}
