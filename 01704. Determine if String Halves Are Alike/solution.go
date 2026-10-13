/**
 * Problem: 1704. Determine if String Halves Are Alike
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func halvesAreAlike(s string) bool {
  // Define vowel set for O(1) lookup including uppercase variants
  vowels := map[byte]bool{'a': true, 'e': true, 'i': true, 'o': true, 'u': true, 'A': true, 'E': true, 'I': true, 'O': true, 'U': true}

  // Calculate half length as split point between halves
  half := len(s) / 2

  // Track vowel count difference between first and second half
  vowelDifference := 0

  // Compare vowels at mirrored positions in both halves
  for i := 0; i < half; i++ {
    // Increment difference when first-half character is a vowel
    if vowels[s[i]] {
      vowelDifference++
    }
    // Decrement difference when second-half character is a vowel
    if vowels[s[half+i]] {
      vowelDifference--
    }
  }

  // Return true when vowel counts balance to zero
  return vowelDifference == 0
}
