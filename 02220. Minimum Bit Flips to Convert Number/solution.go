/**
 * Problem: 2220. Minimum Bit Flips to Convert Number
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minBitFlips(start int, goal int) int {
  // XOR marks each bit that differs between the two numbers
  differingBits := start ^ goal
  // Count the number of differing bits
  flips := 0

  // Remove one set bit until no differing bits remain
  for differingBits != 0 {
    // Clear the lowest set bit
    differingBits &= differingBits - 1
    // Record the required flip
    flips++
  }

  // Return the number of required flips
  return flips
}
