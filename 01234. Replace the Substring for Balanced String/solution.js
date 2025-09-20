/**
 * Problem: 1234. Replace the Substring for Balanced String
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 22 ms (Beats 100%)
 */

/**
 * Returns the minimum substring length to balance the string
 *
 * @param {string} s - String of 'Q', 'W', 'E', 'R'
 *
 * @returns {number} - Minimum length to replace
 */
const balancedString = (s) => {
  // Calculate the maximum allowed frequency for each character to balance the string
  const maxAllowedFreq = s.length / 4

  // Initialize a frequency counter object for each character
  const charCount = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0
  }

  // Count the frequency of each character in the input string
  for (let i = 0; i < s.length; i++) charCount[s[i]] += 1

  // Initialize the result with the maximum possible substring length
  let minLength = s.length
  // Initialize the left pointer for the sliding window
  let left = 0

  // Iterate with the right pointer to expand the sliding window
  for (let right = 0; right < s.length; right++) {
    // Decrement the count for the current character as it's included in the window
    charCount[s[right]]--

    // Check if the remaining string (outside the window) is balanced
    while (
      left < s.length &&
      charCount['Q'] <= maxAllowedFreq &&
      charCount['R'] <= maxAllowedFreq &&
      charCount['E'] <= maxAllowedFreq &&
      charCount['W'] <= maxAllowedFreq
    ) {
      // Update the minimum length if the current window is smaller
      minLength = Math.min(right - left + 1, minLength)
      // Move the left pointer to shrink the window and update the count
      charCount[s[left]]++
      left++
    }
  }

  // Return the minimum length of substring to replace for balancing
  return minLength
}
