/**
 * Problem: 1010. Pairs of Songs With Total Durations Divisible by 60
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count pairs of songs whose durations sum to a multiple of 60
 *
 * @param {number[]} time - Song durations in seconds
 *
 * @returns {number} - Count of valid pairs
 */
const numPairsDivisibleBy60 = (time) => {
  // Array to store the count of each remainder when divided by 60
  const remainderCounts = new Array(60).fill(0)
  // Counter for total valid pairs
  let pairCount = 0

  for (const duration of time) {
    // Calculate the remainder when current duration is divided by 60
    const remainder = duration % 60
    // Find the complementary remainder that would sum to a multiple of 60
    const complement = (60 - remainder) % 60

    // Add the count of songs with complementary remainder to our total
    pairCount += remainderCounts[complement]
    // Increment the count for current remainder
    remainderCounts[remainder]++
  }

  return pairCount
}
