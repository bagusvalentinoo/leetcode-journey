/**
 * Problem: 1061. Lexicographically Smallest Equivalent String
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Gets lexicographically smallest equivalent string
 *
 * @param {string} s1 - First string for equivalence
 * @param {string} s2 - Second string for equivalence
 * @param {string} baseStr - String to transform
 *
 * @returns {string} - Transformed string
 */
const smallestEquivalentString = (s1, s2, baseStr) => {
  // Array to track character equivalence relationships (indices 0-25 represent a-z)
  const charGroups = Array.from({ length: 26 }, (_, i) => i)

  // Find the representative character of a group (with path compression)
  const findRoot = (char) => {
    if (charGroups[char] !== char) charGroups[char] = findRoot(charGroups[char])

    return charGroups[char]
  }

  // Merge two character groups, keeping the lexicographically smaller character as root
  const mergeGroups = (char1, char2) => {
    const root1 = findRoot(char1),
      root2 = findRoot(char2)

    if (root1 === root2) return
    if (root1 < root2) charGroups[root2] = root1
    else charGroups[root1] = root2
  }

  // Process each character pair to establish equivalence relationships
  for (let i = 0; i < s1.length; i++) {
    const charCode1 = s1.charCodeAt(i) - 97,
      charCode2 = s2.charCodeAt(i) - 97

    mergeGroups(charCode1, charCode2)
  }

  // Build result string by replacing each character with its lexicographically smallest equivalent
  let result = ''

  // Map each character in baseStr to its smallest equivalent character
  for (const char of baseStr) {
    const charIndex = char.charCodeAt() - 97
    const smallestChar = String.fromCharCode(findRoot(charIndex) + 97)

    result += smallestChar
  }

  return result
}
