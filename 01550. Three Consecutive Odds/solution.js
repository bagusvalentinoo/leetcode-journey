/**
 * Problem: 1550. Three Consecutive Odds
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if array has three consecutive odd numbers
 *
 * @param {number[]} arr - Input array
 *
 * @returns {boolean} - True if three consecutive odds exist
 */
const threeConsecutiveOdds = (arr) => {
  // Check each position to find three consecutive odd numbers
  for (let i = 0; i < arr.length - 2; i++)
    // If current number and next two are all odd, return true
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0)
      return true

  // No three consecutive odds found
  return false
}
