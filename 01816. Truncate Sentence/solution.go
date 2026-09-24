/**
 * Problem: 1816. Truncate Sentence
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func truncateSentence(s string, k int) string {
  // Scan string to find the k-th space position
  for i, c := range s {
    // Check if current character is a space
    if c == ' ' {
      // Decrement remaining word count
      k--

      // When k reaches 0, we have found the space after the k-th word
      if k == 0 {
        // Return substring from start to current index (excluding trailing space)
        return s[:i]
      }
    }
  }

  // If fewer than k spaces found, sentence has exactly k words
  return s
}
