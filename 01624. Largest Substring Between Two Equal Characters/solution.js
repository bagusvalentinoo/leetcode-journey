/**
 * Problem: 1624. Largest Substring Between Two Equal Characters
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds longest substring between two equal characters
 *
 * @param {string} s - Input string of lowercase letters
 *
 * @returns {number} Max length between equal chars, or -1 if none
 */
const maxLengthBetweenEqualCharacters = (s) => {
  // Store string length for loop boundary
  const stringLength = s.length

  // Track first occurrence index of each letter, -1 means unseen
  const firstIndex = new Array(26).fill(-1)

  // Store maximum length found, -1 when no equal pair exists
  let maxLength = -1

  // Scan each character with its index
  for (let i = 0; i < stringLength; i++) {
    // Convert character to array index 0-25
    const charIndex = s.charCodeAt(i) - 97

    // Check if character was seen before
    if (firstIndex[charIndex] === -1) {
      // Record first occurrence index
      firstIndex[charIndex] = i
    } else {
      // Calculate length between first occurrence and current index excluding both ends
      const currentLength = i - firstIndex[charIndex] - 1

      // Update maximum length if current pair is longer
      maxLength = Math.max(maxLength, currentLength)
    }
  }

  // Return the longest length found, or -1 when no character repeats
  return maxLength
}
