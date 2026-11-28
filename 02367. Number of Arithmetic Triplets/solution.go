/**
 * Problem: 2367. Number of Arithmetic Triplets
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func arithmeticTriplets(nums []int, diff int) int {
  // Store every value for constant-time triplet membership checks
  values := make(map[int]bool, len(nums))

  // Add every number to the lookup map
  for _, number := range nums {
    values[number] = true
  }

  // Count values that can serve as the last element of a triplet
  triplets := 0

  // Check whether each value has both required preceding values
  for _, number := range nums {
    if values[number-diff] && values[number-2*diff] {
      triplets++
    }
  }

  // Return the number of valid arithmetic triplets
  return triplets
}
