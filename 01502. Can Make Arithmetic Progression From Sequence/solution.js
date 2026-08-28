/**
 * Problem: 1502. Can Make Arithmetic Progression From Sequence
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if array can be rearranged into an arithmetic progression
 *
 * @param {number[]} arr - Input array of integers
 *
 * @returns {boolean} True if array can form an arithmetic progression
 */
const canMakeArithmeticProgression = (arr) => {
  // Sort array to arrange elements in ascending order
  arr.sort((a, b) => a - b)

  // Calculate common difference from first two elements
  const commonDifference = arr[1] - arr[0]

  // Check if every consecutive pair has the same difference
  for (let i = 2; i < arr.length; i++)
    // If any difference differs, it cannot form an arithmetic progression
    if (arr[i] - arr[i - 1] !== commonDifference) return false

  // All differences match, array forms an arithmetic progression
  return true
}
