/**
 * Problem: 2573. Find the String with LCP
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

/**
 * Reconstructs string from LCP matrix
 *
 * @param {number[][]} lcp - Longest common prefix matrix
 *
 * @returns {string} Reconstructed string or empty if invalid
 */
const findTheString = (lcp) => {
  // Get the length of the string
  const n = lcp.length

  // Initialize array to store characters of the reconstructed string
  const word = new Array(n).fill('')

  // Start with character 'a' (ASCII 97)
  let currentCharCode = 'a'.charCodeAt(0)

  // First pass: assign characters to positions based on LCP values
  for (let i = 0; i < n; i++) {
    // If current position hasn't been assigned a character yet
    if (!word[i]) {
      // If we've exhausted all lowercase letters (a-z), the LCP matrix is invalid
      if (currentCharCode > 'z'.charCodeAt(0)) return ''

      // Assign current character to this position
      word[i] = String.fromCharCode(currentCharCode)

      // All positions j > i that have LCP[i][j] > 0 must have the same character as position i
      for (let j = i + 1; j < n; j++) {
        if (lcp[i][j] > 0) word[j] = word[i]
      }

      // Move to next character for the next group
      currentCharCode++
    }
  }

  // Second pass: verify that the constructed string matches the LCP matrix
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // If characters at positions i and j are different
      if (word[i] !== word[j]) {
        // LCP should be 0 for different characters
        if (lcp[i][j] !== 0) return ''
      }
      // If characters are the same
      else {
        // For positions at the end of the string (i or j is last index)
        if (i === n - 1 || j === n - 1) {
          // LCP should be 1 for same character at the end
          if (lcp[i][j] !== 1) return ''
        }
        // For other positions
        else {
          // LCP should be 1 + LCP of next positions
          if (lcp[i][j] !== lcp[i + 1][j + 1] + 1) return ''
        }
      }
    }
  }

  // Return the reconstructed string
  return word.join('')
}
