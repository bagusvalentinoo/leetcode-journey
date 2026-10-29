/**
 * Problem: 2068. Check Whether Two Strings are Almost Equivalent
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check whether each letter frequency differs by at most three
 *
 * @param {string} word1 - First lowercase string
 * @param {string} word2 - Second lowercase string
 *
 * @returns {boolean} Whether the strings are almost equivalent
 */
const checkAlmostEquivalent = (word1, word2) => {
  // Track the frequency difference for each lowercase letter
  const frequencies = new Int32Array(26)

  // Add letters from the first word and remove letters from the second word
  for (let i = 0; i < word1.length; i++) {
    frequencies[word1.charCodeAt(i) - 97]++
    frequencies[word2.charCodeAt(i) - 97]--
  }

  // Reject a letter whose frequency difference exceeds the allowed limit
  for (const frequency of frequencies) if (Math.abs(frequency) > 3) return false

  // All letter frequency differences are within the allowed limit
  return true
}
