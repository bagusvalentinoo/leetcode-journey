/**
 * Problem: 890. Find and Replace Pattern
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if two strings are isomorphic
 *
 * @param {string} s - First string
 * @param {string} t - Second string
 *
 * @returns {boolean} - True if the strings are isomorphic, false otherwise
 */
const isIsomorphic = (s, t) => {
  // Maps to store character mappings
  const sCharMap = new Map()
  const tCharMap = new Map()

  // Iterate through the strings
  for (let i = 0; i < s.length; i++) {
    // Check if the character is already mapped
    if (!sCharMap.has(s[i])) sCharMap.set(s[i], t[i])
    // If the characters do not match the existing mappings, return false
    else if (sCharMap.get(s[i]) !== t[i]) return false

    // Check if the character is already mapped
    if (!tCharMap.has(t[i])) tCharMap.set(t[i], s[i])
    // If the characters do not match the existing mappings, return false
    else if (tCharMap.get(t[i]) !== s[i]) return false
  }

  // If all characters match the pattern, return true
  return true
}

/**
 * Finds words that match the given pattern
 *
 * @param {string[]} words - List of words to check
 * @param {string} pattern - The pattern to match
 *
 * @returns {string[]} - List of words that match the pattern
 */
const findAndReplacePattern = (words, pattern) =>
  words.filter((w) => isIsomorphic(w, pattern))
