/**
 * Problem: 3. Longest Substring Without Repeating Characters
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 99.84%)
 */

/**
 * Longest substring without repeating characters
 *
 * @param {string} s - The input string
 *
 * @returns {number} - Longest substring length without repeating characters
 */
const lengthOfLongestSubstring = (s) => {
  const newMap = new Map() // Map to store character positions
  let maxLength = 0 // Longest substring length
  let left = 0 // Left pointer

  // Iterate through the string
  for (let right = 0; right < s.length; right++) {
    const currChar = s[right] // Current character

    // If the current character is in the map, update the left pointer
    if (newMap.has(currChar)) left = Math.max(left, newMap.get(currChar) + 1)

    newMap.set(currChar, right) // Update the map
    maxLength = Math.max(maxLength, right - left + 1) // Update the maximum length
  }

  // Return the maximum length
  return maxLength
}
