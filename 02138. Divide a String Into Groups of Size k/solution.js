/**
 * Problem: 2138. Divide a String Into Groups of Size k
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Divides a string into groups of k characters, padding with fill character if needed
 *
 * @param {string} s - Input string to divide
 * @param {number} k - Characters per group
 * @param {string} fill - Padding character
 *
 * @returns {string[]} - Array of k-character strings
 */
const divideString = (s, k, fill) => {
  // Create a working copy of the input string
  let paddedString = s

  // Pad the string with fill character until length is divisible by k
  while (paddedString.length % k !== 0) paddedString += fill

  // Initialize result array with the correct size
  const result = new Array(paddedString.length / k)

  // Split the padded string into groups of k characters
  for (let i = 0; i < paddedString.length / k; i++)
    result[i] = paddedString.substring(i * k, (i + 1) * k)

  return result
}
