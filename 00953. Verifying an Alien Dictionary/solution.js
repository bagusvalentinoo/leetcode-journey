/**
 * Problem: 953. Verifying an Alien Dictionary
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if words are sorted according to alien dictionary order
 *
 * @param {string[]} words - Array of words to check
 * @param {string} order - Alien alphabet order
 *
 * @returns {boolean} - Whether words are sorted
 */
const isAlienSorted = (words, order) => {
  // Map to store character position in alien alphabet with empty char as -1
  const alpha = new Map([['', -1]])

  // Populate map with each character's position in the alien order
  for (let i = 0; i < order.length; i++) alpha.set(order.charAt(i), i)

  // Compare each adjacent pair of words
  for (let i = 1; i < words.length; i++) {
    const a = words[i - 1],
      b = words[i]

    // Compare characters at the same position in both words
    for (let j = 0; j < a.length; j++) {
      const achar = a.charAt(j),
        bchar = b.charAt(j) || '', // Handle case when b is shorter than a
        aix = alpha.get(achar),
        bix = alpha.get(bchar)

      // If first word char comes before second word char, words are in order
      if (aix < bix) break
      // If first word char comes after second word char, words are not in order
      if (aix > bix) return false
      // If equal, continue checking next characters
    }
  }

  // All words are in lexicographical order based on alien dictionary
  return true
}
