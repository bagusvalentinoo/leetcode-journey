/**
 * Problem: 1208. Get Equal Substrings Within Budget
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the longest substring that can be changed from s to t within maxCost
 *
 * @param {string} s - Source string
 * @param {string} t - Target string
 * @param {number} maxCost - Maximum allowed cost
 *
 * @returns {number} - Maximum substring length
 */
const equalSubstring = (s, t, maxCost) => {
  // Initialize the current total cost of substring transformation
  let currentCost = 0,
    // Initialize the maximum length of valid substring found
    maxSubstringLength = 0,
    // Initialize the left pointer of the sliding window
    left = 0

  // Iterate through each character in the strings
  for (let right = 0; right < s.length; right++) {
    // Add the cost of changing the current character from s to t
    currentCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right))

    // Shrink the window from the left if the cost exceeds maxCost
    while (currentCost > maxCost) {
      // Subtract the cost of the character at the left pointer
      currentCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
      // Move the left pointer to the right
      left++
    }

    // Update the maximum substring length found so far
    maxSubstringLength = Math.max(maxSubstringLength, right - left + 1)
  }

  // Return the maximum valid substring length
  return maxSubstringLength
}
