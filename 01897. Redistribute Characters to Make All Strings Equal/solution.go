/**
 * Problem: 1897. Redistribute Characters to Make All Strings Equal
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func makeEqual(words []string) bool {
  // Get number of strings to divide character counts by
  n := len(words)

  // Track frequency of each lowercase letter
  counts := make([]int, 26)

  // Count every character across all strings
  for _, word := range words {
    // Tally each character in the current word
    for i := 0; i < len(word); i++ {
      counts[word[i]-'a']++
    }
  }

  // Verify each character total divides evenly among all strings
  for i := 0; i < 26; i++ {
    if counts[i]%n != 0 {
      return false
    }
  }

  // All character counts redistribute evenly
  return true
}
