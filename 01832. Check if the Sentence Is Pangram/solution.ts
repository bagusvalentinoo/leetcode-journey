/**
 * Problem: 1832. Check if the Sentence Is Pangram
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if sentence contains every English letter at least once
 *
 * @param sentence - Lowercase English letters string
 *
 * @returns True if sentence is pangram
 */
const checkIfPangram = (sentence: string): boolean => {
  // Collect distinct letters from sentence
  const seen: Set<string> = new Set(sentence)

  // Pangram contains all 26 letters
  return seen.size === 26
}
