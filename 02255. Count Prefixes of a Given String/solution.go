/**
 * Problem: 2255. Count Prefixes of a Given String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countPrefixes(words []string, s string) int {
  // Initialize counter for prefix matches
  count := 0

  // Check each word against the target string
  for _, word := range words {
    // Increment count if s starts with the current word
    if len(word) <= len(s) && s[:len(word)] == word {
      count++
    }
  }

  // Return the total number of prefix matches
  return count
}
