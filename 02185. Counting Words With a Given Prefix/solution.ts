/**
 * Problem: 2185. Counting Words With a Given Prefix
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count words that begin with the given prefix
 *
 * @param words - Words to check
 * @param pref - Required prefix
 *
 * @returns Number of matching words
 */
const prefixCount = (words: string[], pref: string): number => {
  // Count words that start with the required prefix
  let count: number = 0

  // Check every word for the prefix
  for (const word of words) {
    // Increment the count when the word starts with the prefix
    if (word.startsWith(pref)) count++
  }

  // Return the number of matching words
  return count
}
