/**
 * Problem: 1888. Minimum Number of Flips to Make the Binary String Alternating
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 12 ms (Beats 100%)
 */

/**
 * Calculates minimum flips to make binary string alternating
 *
 * @param {string} s - Binary string containing only '0' and '1'
 *
 * @returns {number} Minimum flips needed
 */
const minFlips = (s) => {
  // Count flips needed when starting with '0' at position 0
  let flipsForPattern0 = 0
  for (let i = 0; i < s.length; i++) {
    if (i % 2) {
      // Odd positions should be '1'
      if (s[i] === '0') flipsForPattern0++
    } else {
      // Even positions should be '0'
      if (s[i] === '1') flipsForPattern0++
    }
  }

  // Flips needed for opposite pattern (starting with '1')
  let flipsForPattern1 = s.length - flipsForPattern0
  let minFlips = Math.min(flipsForPattern0, flipsForPattern1)

  const isEvenLength = s.length % 2 === 0

  // Slide window by removing first character and treating as new start
  for (let i = 1; i < s.length; i++) {
    // Remove effect of character at i-1 from counts
    if (s[i - 1] === '1') flipsForPattern0--
    else
      flipsForPattern1--

      // Swap patterns (rotation effect)
    ;[flipsForPattern1, flipsForPattern0] = [flipsForPattern0, flipsForPattern1]

    // Add back character at i-1 with appropriate pattern
    if (isEvenLength) {
      // if the length is even, the first character of the new window
      // will be at an even position
      if (s[i - 1] === '1') flipsForPattern1++
      else flipsForPattern0++
    } else {
      // if the length is odd, the first character of the new window
      // will be at an odd position
      if (s[i - 1] === '1') flipsForPattern0++
      else flipsForPattern1++
    }

    // Update minimum flips
    minFlips = Math.min(flipsForPattern0, flipsForPattern1, minFlips)
  }

  // if the length is even, the first character of the new window
  // will be at an even position
  return minFlips
}
