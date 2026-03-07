/**
 * Problem: 1888. Minimum Number of Flips to Make the Binary String Alternating
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 14 ms (Beats 100%)
 */

/**
 * Calculates minimum flips to make binary string alternating
 *
 * @param s - Binary string containing only '0' and '1'
 *
 * @returns Minimum flips needed
 */
const minFlips = (s: string): number => {
  // Count flips needed when starting with '0' at position 0
  let flipsForPattern0: number = 0
  for (let i: number = 0; i < s.length; i++) {
    if (i % 2) {
      // Odd positions should be '1'
      if (s[i] === '0') flipsForPattern0++
    } else {
      // Even positions should be '0'
      if (s[i] === '1') flipsForPattern0++
    }
  }

  // Flips needed for opposite pattern (starting with '1')
  let flipsForPattern1: number = s.length - flipsForPattern0
  let minFlips: number = Math.min(flipsForPattern0, flipsForPattern1)

  const isEvenLength: boolean = s.length % 2 === 0

  // Slide window by removing first character and treating as new start
  for (let i: number = 1; i < s.length; i++) {
    // Remove effect of character at i-1 from counts
    if (s[i - 1] === '1') flipsForPattern0--
    else
      flipsForPattern1--

      // Swap patterns (rotation effect)
    ;[flipsForPattern1, flipsForPattern0] = [flipsForPattern0, flipsForPattern1]

    // Add back character at i-1 with appropriate pattern
    if (isEvenLength) {
      // If length is even, first character of new window is at even position
      if (s[i - 1] === '1') flipsForPattern1++
      else flipsForPattern0++
    } else {
      // If length is odd, first character of new window is at odd position
      if (s[i - 1] === '1') flipsForPattern0++
      else flipsForPattern1++
    }

    // Update minimum flips
    minFlips = Math.min(flipsForPattern0, flipsForPattern1, minFlips)
  }

  return minFlips
}
