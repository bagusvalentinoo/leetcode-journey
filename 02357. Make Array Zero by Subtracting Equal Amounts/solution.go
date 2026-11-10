/**
 * Problem: 2357. Make Array Zero by Subtracting Equal Amounts
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumOperations(nums []int) int {
  // Store each distinct positive value because each requires one operation
  positiveValues := make(map[int]bool)

  // Add each positive number to the set
  for _, number := range nums {
    if number > 0 {
      positiveValues[number] = true
    }
  }

  // Return the number of distinct positive values
  return len(positiveValues)
}
