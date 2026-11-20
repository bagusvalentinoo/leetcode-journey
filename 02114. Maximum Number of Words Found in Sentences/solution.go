/**
 * Problem: 2114. Maximum Number of Words Found in Sentences
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func mostWordsFound(sentences []string) int {
  // Track the largest word count found
  maximumWords := 0

  // Count words in each sentence
  for _, sentence := range sentences {
    // A sentence has one more word than spaces
    wordCount := 1

    // Count each space separating words
    for _, character := range sentence {
      if character == ' ' {
        wordCount++
      }
    }

    // Update the largest word count
    if wordCount > maximumWords {
      maximumWords = wordCount
    }
  }

  // Return the largest word count
  return maximumWords
}
