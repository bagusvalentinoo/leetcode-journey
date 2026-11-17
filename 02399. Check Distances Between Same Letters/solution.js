/**
 * Problem: 2399. Check Distances Between Same Letters
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check whether each repeated letter has its required distance
 *
 * @param {string} s - String containing each letter at most twice
 * @param {number[]} distance - Required gaps for each letter
 *
 * @returns {boolean} Whether the string is well-spaced
 */
const checkDistances = (s, distance) => {
  // Store the first position seen for every letter
  const firstPositions = new Int32Array(26).fill(-1)

  // Check each letter as it appears in the string
  for (let i = 0; i < s.length; i++) {
    // Convert the current letter to its alphabet index
    const letterIndex = s.charCodeAt(i) - 97

    // Record a letter's first occurrence
    if (firstPositions[letterIndex] === -1) {
      firstPositions[letterIndex] = i
      continue
    }

    // Reject distances that do not match the required gap
    if (i - firstPositions[letterIndex] - 1 !== distance[letterIndex]) return false
  }

  // All repeated letters have their required distances
  return true
}
