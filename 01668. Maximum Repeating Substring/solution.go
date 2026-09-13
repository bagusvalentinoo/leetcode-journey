/**
 * Problem: 1668. Maximum Repeating Substring
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxRepeating(sequence string, word string) int {
  // Maximum possible repetitions bounded by the length ratio
  maxK := len(sequence) / len(word)

  // Try each k from largest to smallest, the first match is the maximum
  for k := maxK; k >= 0; k-- {
    // Build word concatenated k times
    repeated := ""
    for i := 0; i < k; i++ {
      repeated += word
    }

    // Return k if the repeated string appears in sequence
    if contains(sequence, repeated) {
      return k
    }
  }

  // Word never appears, so the repeating value is 0
  return 0
}

// Helper function to check if sub is a substring of s
func contains(s, sub string) bool {
  // Empty string is a substring of any string
  if len(sub) == 0 {
    return true
  }

  // Check every window of s with the length of sub
  for i := 0; i+len(sub) <= len(s); i++ {
    // Return true on the first matching window
    if s[i:i+len(sub)] == sub {
      return true
    }
  }

  // No window matched, so sub is not a substring of s
  return false
}
