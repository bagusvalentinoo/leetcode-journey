/**
 * Problem: 2068. Check Whether Two Strings are Almost Equivalent
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkAlmostEquivalent(word1 string, word2 string) bool {
  // Track the frequency difference for each lowercase letter
  frequencies := [26]int{}

  // Add letters from the first word and remove letters from the second word
  for i := 0; i < len(word1); i++ {
    frequencies[word1[i]-'a']++
    frequencies[word2[i]-'a']--
  }

  // Reject a letter whose frequency difference exceeds the allowed limit
  for _, frequency := range frequencies {
    if frequency < -3 || frequency > 3 {
      return false
    }
  }

  // All letter frequency differences are within the allowed limit
  return true
}
