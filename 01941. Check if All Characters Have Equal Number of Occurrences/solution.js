/**
 * Problem: 1941. Check if All Characters Have Equal Number of Occurrences
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check whether every character that appears has the same frequency
 *
 * @param {string} s - String of lowercase English letters
 *
 * @returns {boolean} True when all character frequencies are equal
 */
const areOccurrencesEqual = (s) => {
  // Store the frequency for each lowercase English letter
  const freq = new Int16Array(26)

  // Count the frequency of every character in the input string
  for (let i = 0; i < s.length; i++) freq[s.charCodeAt(i) - 97]++

  // Use the first character frequency as the comparison target
  const target = freq[s.charCodeAt(0) - 97]

  // Compare only frequencies for characters that appear in the string
  for (let i = 0; i < 26; i++) {
    if (freq[i] !== 0 && freq[i] !== target) return false
  }

  // All character frequencies are equal
  return true
}
