/**
 * Problem: 3170. Lexicographically Minimum String After Removing Stars
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Removes the lexicographically smallest character from the string when a '*' is encountered
 *
 * @param {string} s - Input string with letters and stars
 *
 * @returns {string} - Resulting string after processing
 */
const clearStars = (s) => {
  // Split the input string into an array of characters for manipulation
  const characters = s.split('')
  // Create an array of 26 empty arrays to store indices of each letter (a-z)
  const letterIndices = Array.from({ length: 26 }, () => [])

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '*') {
      // Mark current star position as empty
      characters[i] = ''

      for (let j = 0; j < 26; ++j) {
        // Find the earliest occurrence of the lexicographically smallest character
        if (letterIndices[j].length > 0) {
          const charIndex = letterIndices[j].pop()
          // Remove the character at the found index
          characters[charIndex] = ''
          break
        }
      }
    } else {
      // Store the index of the current character in its corresponding bucket
      letterIndices[s.charCodeAt(i) - 97].push(i)
    }
  }

  // Join the remaining characters into the result string
  return characters.join('')
}
