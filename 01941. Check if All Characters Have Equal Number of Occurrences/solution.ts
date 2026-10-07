/**
 * Problem: 1941. Check if All Characters Have Equal Number of Occurrences
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check whether every character that appears has the same frequency
 *
 * @param s - String of lowercase English letters
 *
 * @returns True when all character frequencies are equal
 */
const areOccurrencesEqual = (s: string): boolean => {
  // Store the frequency for each lowercase English letter
  const freq: Int16Array = new Int16Array(26)

  // Count the frequency of every character in the input string
  for (let i: number = 0; i < s.length; i++) freq[s.charCodeAt(i) - 97]++

  // Use the first character frequency as the comparison target
  const target: number = freq[s.charCodeAt(0) - 97]

  // Compare only frequencies for characters that appear in the string
  for (let i: number = 0; i < 26; i++) {
    if (freq[i] !== 0 && freq[i] !== target) return false
  }

  // All character frequencies are equal
  return true
}
