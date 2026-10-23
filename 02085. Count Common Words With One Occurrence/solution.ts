/**
 * Problem: 2085. Count Common Words With One Occurrence
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Represent the occurrence and matching state of a word
 */
const enum WordState {
  SINGLE,
  SINGLE_MATCH,
  INVALID,
}

/**
 * Count words that appear exactly once in both arrays
 *
 * @param words1 - First array of words
 * @param words2 - Second array of words
 *
 * @returns Number of common words with one occurrence
 */
const countWords = (words1: string[], words2: string[]): number => {
  // Process the shorter array first to minimize the number of stored states
  if (words1.length > words2.length) [words1, words2] = [words2, words1]

  // Store each word's occurrence and matching state
  const wordStates: Map<string, WordState> = new Map<string, WordState>()

  // Mark words appearing once or multiple times in the first array
  for (let i = 0; i < words1.length; i++) {
    // Get the current word from the first array
    const word: string = words1[i]

    // Invalidate repeated words; otherwise, mark the word as a single occurrence
    wordStates.set(
      word,
      wordStates.has(word) ? WordState.INVALID : WordState.SINGLE,
    )
  }

  // Track words that appear exactly once in both arrays
  let count: number = 0

  // Process words from the second array
  for (let i = 0; i < words2.length; i++) {
    // Get the current word from the second array
    const word: string = words2[i]

    // Retrieve the word's state from the first array
    const wordState: WordState | undefined = wordStates.get(word)

    // Skip words absent from the first array or already invalidated
    if (wordState === undefined || wordState === WordState.INVALID) continue

    // Count a first match; invalidate it if it appears again in the second array
    if (wordState === WordState.SINGLE) {
      wordStates.set(word, WordState.SINGLE_MATCH)
      count++
    } else {
      wordStates.set(word, WordState.INVALID)
      count--
    }
  }

  // Return the number of words occurring exactly once in both arrays
  return count
}
