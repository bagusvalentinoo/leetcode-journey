/**
 * Problem: 1897. Redistribute Characters to Make All Strings Equal
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if characters can be redistributed to make all strings equal
 *
 * @param words - Array of strings to equalize
 *
 * @returns True if all strings can be made equal
 */
const makeEqual = (words: string[]): boolean => {
  // Get number of strings to divide character counts by
  const n: number = words.length

  // Track frequency of each lowercase letter
  const counts: number[] = new Array(26).fill(0)

  // Count every character across all strings
  for (const word of words) {
    // Tally each character in the current word
    for (let i = 0; i < word.length; i++) counts[word.charCodeAt(i) - 97]++
  }

  // Verify each character total divides evenly among all strings
  for (let i = 0; i < 26; i++) if (counts[i] % n !== 0) return false

  // All character counts redistribute evenly
  return true
}
