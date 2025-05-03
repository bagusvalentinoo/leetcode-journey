/**
 * Problem: 942. DI String Match
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reconstructs the permutation from the given string of 'I's and 'D's
 *
 * @param {string} s - The string composed of 'I' and 'D' characters
 *
 * @returns {number[]} - The reconstructed permutation
 */
const diStringMatch = (s) => {
  // Initialize result array and two pointers (low starts at 0, high at string length)
  const result = []
  let low = 0
  let high = s.length

  // Process each character including the implicit final position
  for (let i = 0; i <= s.length; i++) {
    // For 'I' (increasing), use current low value then increment
    if (s[i] === 'I') {
      result.push(low)
      low++
    }
    // For 'D' (decreasing), use current high value then decrement
    else {
      result.push(high)
      high--
    }
  }

  // Return the constructed permutation
  return result
}
