/**
 * Problem: 941. Valid Mountain Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 33 ms (Beats 99.03%)
 */

/**
 * Checks if an array is a valid mountain array
 *
 * @param {number[]} arr - Input array
 *
 * @returns {boolean} - True if valid, otherwise false
 */
const validMountainArray = (arr) => {
  // Initialize the length of the array
  const len = arr.length

  // Initialize the index variable
  let i = 0

  // Walk up the mountain
  while (i < len && arr[i] < arr[i + 1]) i++

  // Check if we have reached the peak
  if (i === 0 || i >= len - 1) return false

  // Walk down the mountain
  while (i < len && arr[i] > arr[i + 1]) i++

  // Check if we have reached the end of the array
  return i === len - 1
}
