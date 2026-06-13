/**
 * Problem: 1446. Consecutive Characters
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Max length of consecutive identical chars
 *
 * @param {string} s - Input string
 *
 * @returns {number} Longest consecutive streak
 */
const maxPower = (s) => {
  // Convert string to array of characters
  const characters = s.split('')

  // Initialize maximum power to at least 1 (single character)
  let maxConsecutive = 1

  // Iterate through each character in the array
  for (let i = 0; i < characters.length; i++) {
    // Counter for current consecutive sequence length
    let currentStreak = 1

    // Count consecutive identical characters starting at position i
    while (i < characters.length - 1 && characters[i] === characters[i + 1]) {
      // Increment streak counter
      currentStreak++
      // Move to next character
      i++
    }

    // Update maximum if current streak is larger
    if (currentStreak > maxConsecutive) maxConsecutive = currentStreak
  }

  // Return the maximum consecutive length found
  return maxConsecutive
}
