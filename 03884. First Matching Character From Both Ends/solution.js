/**
 * Problem: 3884. First Matching Character From Both Ends
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds first index where character matches its mirror position
 *
 * @param {string} s - Input string
 *
 * @returns {number} First matching index or -1 if none
 */
const firstMatchingIndex = (s) => {
  // Get string length
  const { length } = s

  // Iterate through each character from start to middle
  for (let i = 0; i < length; i++) {
    // Get character at current position and its mirror position
    const leftChar = s[i],
      rightChar = s[length - i - 1]

    // If characters match, return current index
    if (leftChar === rightChar) return i
  }

  // No matching pair found
  return -1
}
