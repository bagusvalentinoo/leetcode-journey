/**
 * Problem: 1869. Longer Contiguous Segments of Ones than Zeros
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if longest contiguous segment of ones is longer than zeros
 *
 * @param {string} s - Binary string of '0' and '1' characters
 *
 * @returns {boolean} True if longest ones segment is strictly longer
 */
const checkZeroOnes = (s) => {
  // Track longest segments found for each character
  let maxOnes = 0, maxZeros = 0

  // Track current running segment lengths
  let currentOnes = 0, currentZeros = 0

  // Scan each character in the binary string
  for (const ch of s) {
    // Extend ones run and reset zeros run
    if (ch === '1') {
      // Increment current ones streak
      currentOnes++

      // Reset zeros streak
      currentZeros = 0

      // Update longest ones segment
      if (currentOnes > maxOnes) maxOnes = currentOnes
    } else {
      // Increment current zeros streak
      currentZeros++

      // Reset ones streak
      currentOnes = 0

      // Update longest zeros segment
      if (currentZeros > maxZeros) maxZeros = currentZeros
    }
  }

  // Longest ones segment must be strictly longer than longest zeros segment
  return maxOnes > maxZeros
}
