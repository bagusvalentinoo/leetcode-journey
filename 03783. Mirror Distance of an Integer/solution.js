/**
 * Problem: 3783. Mirror Distance of an Integer
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates distance between a number and its mirror
 *
 * @param {number} n - Input integer
 *
 * @returns {number} Absolute difference between n and its mirror
 */
const mirrorDistance = (n) => {
  // Convert number to string
  const reversed = String(n)
    // Reverse the string
    .split('')
    //
    .reverse()
    // Convert the reversed string back to a number
    .join('')

  // Return the absolute difference between the original number and its mirror
  return Math.abs(n - reversed)
}
