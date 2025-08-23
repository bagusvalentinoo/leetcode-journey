/**
 * Problem: 1163. Last Substring in Lexicographical Order
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 12 ms (Beats 100%)
 */

/**
 * Returns the lexicographically last substring of a string
 *
 * @param {string} s - Input string
 *
 * @returns {string} - Lexicographically last substring
 */
const lastSubstring = (s) => {
  // Initialize pointers for comparison:
  // i: start index of current best substring
  // j: start index of candidate substring
  // k: offset for character comparison
  let i = 0,
    j = 1,
    k = 0

  // Store the length of the input string
  const n = s.length

  // Loop until the candidate substring goes out of bounds
  while (j + k < n) {
    // If characters at current offset are equal, move to next character
    if (s[i + k] === s[j + k]) k++
    // If candidate substring is lexicographically greater, update i and j
    else if (s[i + k] < s[j + k]) {
      // Move i to the next possible start, update j accordingly, and reset k
      i = Math.max(i + k + 1, j)
      j = i + 1
      k = 0
    }
    // If current best substring is greater, move j to next candidate and reset k
    else {
      j = j + k + 1
      k = 0
    }
  }

  // Return the lexicographically last substring starting at index i
  return s.substring(i)
}
