/**
 * Problem: 1816. Truncate Sentence
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Truncates sentence to first k words
 *
 * @param s - Input sentence with words separated by single spaces
 * @param k - Number of words to keep
 *
 * @returns Truncated sentence containing first k words
 */
const truncateSentence = (s: string, k: number): string => {
  // Scan string to find the k-th space position
  for (let i = 0; i < s.length; i++) {
    // Check if current character is a space
    if (s[i] === ' ') {
      // Decrement remaining word count
      k--

      // When k reaches 0, we have found the space after the k-th word
      if (k === 0) {
        // Return substring from start to current index (excluding trailing space)
        return s.slice(0, i)
      }
    }
  }

  // If fewer than k spaces found, sentence has exactly k words
  return s
}
