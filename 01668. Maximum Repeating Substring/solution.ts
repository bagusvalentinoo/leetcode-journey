/**
 * Problem: 1668. Maximum Repeating Substring
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the maximum k such that word repeated k times is a substring of sequence
 *
 * @param sequence - Input string to search within
 * @param word - Word to repeat and search for
 *
 * @returns Maximum k-repeating value
 */
const maxRepeating = (sequence: string, word: string): number => {
  // Maximum possible repetitions bounded by the length ratio
  const maxK: number = Math.floor(sequence.length / word.length)

  // Try each k from largest to smallest, the first match is the maximum
  for (let k = maxK; k >= 0; k--) {
    // Build word concatenated k times
    const repeated: string = word.repeat(k)

    // Return k if the repeated string appears in sequence
    if (sequence.includes(repeated)) return k
  }

  // Word never appears, so the repeating value is 0
  return 0
}
