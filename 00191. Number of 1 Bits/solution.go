/**
 * Problem: 191. Number of 1 Bits
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func hammingWeight(n int) int {
  // Counter for set bits found
  setBitCount := 0

  // Clear the lowest set bit each iteration until no bits remain
  for n != 0 {
    // Drop the lowest set bit from n
    n &= n - 1

    // Count the removed bit
    setBitCount++
  }

  // Return the total number of set bits
  return setBitCount
}
