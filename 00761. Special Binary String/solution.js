/**
 * Problem: 761. Special Binary String
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the lexicographically largest special binary string after applying swaps
 *
 * @param {string} s - The input special binary string
 *
 * @return {string} The lexicographically largest special binary string
 */
const makeLargestSpecial = (s) => {
  // Base case: strings of length 2 or less cannot be rearranged
  if (s.length <= 2) return s

  // Track balance of 1s and 0s
  let balance = 0

  // Track start position of current substring
  let start = 0

  // Store processed special substrings
  const specials = []

  // Iterate through the string
  for (let i = 0; i < s.length; i++) {
    // Increment balance for '1', decrement for '0'
    balance += s[i] === '1' ? 1 : -1

    // When balance reaches zero, we found a valid special substring
    if (balance === 0) {
      // Process inner substring recursively
      // Wrap with '1' at start and '0' at end
      specials.push('1' + makeLargestSpecial(s.slice(start + 1, i)) + '0')

      // Move start to next position
      start = i + 1
    }
  }

  // Sort in descending order and concatenate
  return specials.sort().reverse().join('')
}
