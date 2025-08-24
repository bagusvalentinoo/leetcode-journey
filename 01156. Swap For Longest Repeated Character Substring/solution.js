/**
 * Problem: 1156. Swap For Longest Repeated Character Substring
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Finds the longest repeated character substring after one swap
 *
 * @param {string} text - Lowercase input string
 *
 * @returns {number} - Length of the longest repeated substring
 */
const maxRepOpt1 = (text) => {
  // Initialize an array to store the total count of each character in the input string
  const totalCnts = Array(26).fill(0)

  // Count the occurrences of each character in the input string
  for (const char of text) totalCnts[char.charCodeAt() - 97]++

  // Get the length of the input string
  const textLength = text.length,
    // Initialize an array to store the current window's character counts
    windowCnts = Array(26).fill(0)

  // Initialize the left pointer of the sliding window
  let left = 0,
    // Variable to keep track of the maximum count of a single character in the current window
    maxCharCount = 0

  // Iterate through the string using the right pointer
  for (let right = 0; right < textLength; right++) {
    // Get the index of the current character
    const charIndex = text[right].charCodeAt() - 97
    // Increment the count of the current character in the window
    windowCnts[charIndex]++

    // Update the maximum character count if possible by considering one swap
    if (totalCnts[charIndex] - 1 > maxCharCount)
      maxCharCount = Math.max(maxCharCount, windowCnts[charIndex])
    // If the window size minus the max character count is greater than 0, shrink the window from the left
    if (right - left - maxCharCount > 0)
      windowCnts[text[left++].charCodeAt() - 97]--
  }

  // Return the length of the longest valid window found
  return textLength - left
}
