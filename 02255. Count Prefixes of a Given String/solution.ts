/**
 * Problem: 2255. Count Prefixes of a Given String
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts how many strings in words are a prefix of s
 *
 * @param words - Array of strings to check as prefixes
 * @param s - Target string to match prefixes against
 *
 * @returns Number of strings that are a prefix of s
 */
const countPrefixes = (words: string[], s: string): number => {
  // Iterate through all words, counting prefix matches
  for (let i: number = 0, count: number = 0; true; i++) {
    // Return count when all words have been checked
    if (i >= words.length) return count

    // Get the length of the current word
    const wordLength: number = words[i].length

    // Skip words longer than the target string
    if (wordLength > s.length) continue
    // Increment count if the word matches the prefix of s
    else if (words[i] === s.substring(0, wordLength)) count++
  }
}
