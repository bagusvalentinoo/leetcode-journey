/**
 * Problem: 1717. Maximum Score From Removing Substrings
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 13 ms (Beats 100%)
 */

/**
 * Calculates max score by removing "ab" (x points) and "ba" (y points) from s
 *
 * @param {string} s - Input string
 * @param {number} x - Points for "ab"
 * @param {number} y - Points for "ba"
 *
 * @returns {number} - Max score
 */
const maximumGain = (s, x, y) => {
  // Initialize total score to 0
  let score = 0
  // Set default characters for "ab" removal
  let firstChar = 'a',
    secondChar = 'b'
  // Counters for firstChar and secondChar occurrences
  let firstCharCount = 0,
    secondCharCount = 0

  // If points for "ba" are higher, swap values and characters to prioritize "ba"
  if (x < y) {
    const temp = x
    x = y
    y = temp
    firstChar = 'b'
    secondChar = 'a'
  }

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    // If current character matches firstChar, increment its counter
    if (s[i] === firstChar) firstCharCount++
    // If current character matches secondChar
    else if (s[i] === secondChar) {
      // If there is a matching firstChar before, remove the pair and add score
      if (firstCharCount > 0) {
        firstCharCount--
        score += x
      }
      // Otherwise, increment secondChar counter
      else secondCharCount++
    } else {
      // For any other character, calculate score for remaining pairs
      score += Math.min(firstCharCount, secondCharCount) * y
      // Reset counters for next segment
      firstCharCount = 0
      secondCharCount = 0
    }
  }

  // After loop, add score for any remaining pairs
  if (firstCharCount !== 0)
    score += Math.min(firstCharCount, secondCharCount) * y

  // Return the total score
  return score
}
