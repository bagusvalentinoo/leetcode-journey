/**
 * Problem: 1832. Check if the Sentence Is Pangram
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkIfPangram(sentence string) bool {
  // Track seen letters using hash set
  seen := make(map[rune]bool)

  // Process each character
  for _, ch := range sentence {
    // Add character to seen set
    seen[ch] = true
  }

  // Pangram contains all 26 letters
  return len(seen) == 26
}
