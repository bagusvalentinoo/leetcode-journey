/**
 * Problem: 1876. Substrings of Size Three with Distinct Characters
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countGoodSubstrings(s string) int {
  // Store count of good substrings
  goodCount := 0

  // Get string length for loop boundary
  stringLength := len(s)

  // Check each window of three consecutive characters
  for i := 0; i+2 < stringLength; i++ {
    // Read the three characters in current window
    first, second, third := s[i], s[i+1], s[i+2]

    // Count window when all three characters are pairwise distinct
    if first != second && first != third && second != third {
      goodCount++
    }
  }

  // Return total number of good substrings
  return goodCount
}
