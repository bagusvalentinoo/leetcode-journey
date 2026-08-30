/**
 * Problem: 1528. Shuffle String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func restoreString(s string, indices []int) string {
  // Initialize byte slice with the same length as the input string
  result := make([]byte, len(s))

  // Place each character at its target position
  for i := 0; i < len(s); i++ {
    // Character at index i moves to position indices[i]
    result[indices[i]] = s[i]
  }

  // Return the restored string built from the byte slice
  return string(result)
}
