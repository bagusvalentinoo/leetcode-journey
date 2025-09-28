/**
 * Problem: 1247. Minimum Swaps to Make Strings Equal
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the minimum swaps to make two strings equal
 *
 * @param {string} s1 - First string
 * @param {string} s2 - Second string
 *
 * @returns {number} - Minimum swaps or -1 if impossible
 */
const minimumSwap = (s1, s2) => {
  // Get the length of the input strings
  const { length } = s1

  // Initialize counters for mismatched pairs: 'xy' and 'yx'
  let countXY = 0,
    countYX = 0

  // Iterate through each character to count mismatches
  for (let i = 0; i < length; i++) {
    // Count positions where s1 has 'x' and s2 has 'y'
    if (s1[i] === 'x' && s2[i] === 'y') countXY++
    // Count positions where s1 has 'y' and s2 has 'x'
    if (s1[i] === 'y' && s2[i] === 'x') countYX++
  }

  // If the total number of mismatches is odd, it's impossible to swap
  if ((countXY + countYX) % 2 !== 0) return -1

  // Initialize the swap operations counter
  let minSwaps = 0

  // If both counts are odd, one extra swap is needed
  if (countXY % 2 === 1) minSwaps += 1

  // Add swaps needed for pairs of mismatches
  minSwaps = minSwaps + countXY / 2 + countYX / 2

  // Return the minimum number of swaps required
  return minSwaps
}
