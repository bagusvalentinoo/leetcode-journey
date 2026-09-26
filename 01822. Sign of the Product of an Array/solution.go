/**
 * Problem: 1822. Sign of the Product of an Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func arraySign(nums []int) int {
  // Count negative numbers to determine product sign
  negativeCount := 0

  // Iterate through each number in the array
  for _, currentNumber := range nums {
    // If any element is zero the product is zero
    if currentNumber == 0 {
      return 0
    }
    // Count negative numbers
    if currentNumber < 0 {
      negativeCount++
    }
  }

  // Return -1 for odd negatives, 1 for even negatives
  if negativeCount%2 == 0 {
    return 1
  }
  return -1
}
