/**
 * Problem: 2085. Count Common Words With One Occurrence
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countWords(words1 []string, words2 []string) int {
  // Store the occurrence counts for words in both arrays
  wordCounts1 := make(map[string]int)
  wordCounts2 := make(map[string]int)

  // Count each word in the first array
  for _, word := range words1 {
    wordCounts1[word]++
  }

  // Count each word in the second array
  for _, word := range words2 {
    wordCounts2[word]++
  }

  // Track words that occur exactly once in both arrays
  commonWordCount := 0

  // Check every word from the first array
  for _, word := range words1 {
    // Count words that occur once in each array
    if wordCounts1[word] == wordCounts2[word] && wordCounts1[word] == 1 {
      commonWordCount++
    }
  }

  // Return the number of qualifying common words
  return commonWordCount
}
