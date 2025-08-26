/**
 * Problem: 1177. Can Make Palindrome from Substring
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 13 ms (Beats 100%)
 */

/**
 * Determines if substrings can be rearranged into palindromes
 *
 * @param {string} s - Input string
 * @param {number[][]} queries - Query ranges and allowed changes
 *
 * @returns {boolean[]} - Results for each query
 */
const canMakePaliQueries = (s, queries) => {
  // Initialize an array to store prefix XOR bitmasks for character counts
  const prefixBitmasks = new Array(s.length + 1)

  // Build the prefixBitmasks array, where each entry represents the XOR of character counts up to that index
  for (let i = 1; i <= s.length; i++)
    // Update the bitmask by XOR-ing the previous value with the bit corresponding to the current character
    prefixBitmasks[i] =
      prefixBitmasks[i - 1] ^ (1 << (s.charCodeAt(i - 1) - 97))

  // Process each query to determine if the substring can be rearranged into a palindrome with at most k changes
  return queries.map(([startIdx, endIdx, maxChanges]) => {
    // If allowed changes are greater than or equal to 13, any substring can be rearranged into a palindrome
    if (maxChanges >= 13) return true

    // Calculate the XOR of the bitmasks for the substring, representing characters with odd counts
    let oddMask = prefixBitmasks[endIdx + 1] ^ prefixBitmasks[startIdx],
      oddCount = 0

    // Count the number of bits set in oddMask, which equals the number of characters with odd counts
    while (oddMask > 0) {
      oddCount += oddMask & 1
      oddMask >>= 1
    }

    // Return true if the number of required changes (oddCount / 2) does not exceed maxChanges
    return Math.floor(oddCount / 2) <= maxChanges
  })
}
