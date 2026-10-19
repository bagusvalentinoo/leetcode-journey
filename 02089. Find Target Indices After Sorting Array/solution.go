/**
 * Problem: 2089. Find Target Indices After Sorting Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func targetIndices(nums []int, target int) []int {
  // Count values that appear before and equal to the target after sorting
  smallerCount := 0
  targetCount := 0

  // Inspect every value to determine the target's sorted range
  for _, number := range nums {
    if number < target {
      smallerCount++
    }
    if number == target {
      targetCount++
    }
  }

  // Store each index occupied by the target values
  indices := make([]int, 0, targetCount)

  // Add the consecutive indices that start after smaller values
  for index := 0; index < targetCount; index++ {
    indices = append(indices, smallerCount+index)
  }

  // Return the target indices in increasing order
  return indices
}
