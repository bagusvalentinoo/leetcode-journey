/**
 * Problem: 1652. Defuse the Bomb
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Decrypts circular array by summing next or previous k elements
 *
 * @param {number[]} code - Circular array of integers
 * @param {number} k - Key determining summation direction and length
 *
 * @returns {number[]} Decrypted code array
 */
const decrypt = (code, k) => {
  // Store array length for circular index wrapping
  const codeLength = code.length

  // Initialize output array with zeros to cover the k == 0 case
  const answer = new Array(codeLength).fill(0)

  // Handle k == 0 by returning all zeros directly
  if (k === 0) return answer

  // Store number of elements to sum for each position
  const steps = Math.abs(k)

  // Process each position in the circular array
  for (let i = 0; i < codeLength; i++) {
    // Accumulate sum of neighboring elements for the current position
    let windowSum = 0

    // Sum the next k or previous -k elements with wraparound
    for (let j = 1; j <= steps; j++)
      // Wrap index around the circular array using modulo
      windowSum +=
        k > 0
          ? code[(i + j) % codeLength]
          : code[(i - j + codeLength) % codeLength]

    // Store the decrypted value for the current position
    answer[i] = windowSum
  }

  // Return the decrypted code array
  return answer
}
