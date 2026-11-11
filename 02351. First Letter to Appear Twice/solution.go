/**
 * Problem: 2351. First Letter to Appear Twice
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func repeatedCharacter(s string) byte {
  // Track characters encountered while scanning from left to right
  seen := [26]bool{}

  // Return immediately when a character has already been seen
  for i := 0; i < len(s); i++ {
    index := s[i] - 'a'
    if seen[index] {
      return s[i]
    }

    // Record the character's first occurrence
    seen[index] = true
  }

  // The constraints guarantee that a repeated character exists
  return 0
}
