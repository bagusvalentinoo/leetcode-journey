/**
 * Problem: 1941. Check if All Characters Have Equal Number of Occurrences
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func areOccurrencesEqual(s string) bool {
  // Store the frequency for each lowercase English letter
  var freq [26]int16

  // Count the frequency of every character in the input string
  for i := 0; i < len(s); i++ {
    freq[s[i]-97]++
  }

  // Use the first character frequency as the comparison target
  target := freq[s[0]-97]

  // Compare only frequencies for characters that appear in the string
  for i := 0; i < 26; i++ {
    if freq[i] != 0 && freq[i] != target {
      return false
    }
  }

  // All character frequencies are equal
  return true
}
