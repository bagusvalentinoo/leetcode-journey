/**
 * Problem: 1652. Defuse the Bomb
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Decrypts circular array by summing next or previous k elements
 *
 * @param code - Circular array of integers
 * @param k - Key determining summation direction and length
 *
 * @returns Decrypted code array
 */
const decrypt = (code: number[], k: number): number[] => {
  // Handle k == 0 by returning all zeros directly
  if (k === 0) return new Array(code.length).fill(0)

  // Store array length, running window sum, and output array
  const codeLength: number = code.length
  let windowSum: number = 0
  const answer: number[] = []

  // Sum the next k elements when the key is positive
  if (k > 0) {
    // Initialize window with the first k elements after index 0
    for (let i = 1; i <= k; i++) windowSum += code[i]

    // Store decrypted value for the first position
    answer[0] = windowSum

    // Slide the window forward for the remaining positions
    for (let i = 1; i < codeLength; i++) {
      // Drop the element leaving the window and add the entering one
      windowSum = windowSum - code[i] + code[(i + k) % codeLength]

      // Store decrypted value for the current position
      answer[i] = windowSum
    }
  } else {
    // Store count of previous elements to sum
    const steps: number = Math.abs(k)

    // Initialize window with the last steps elements wrapping to index 0
    for (let i = 1; i <= steps; i++) windowSum += code[codeLength - i]

    // Store decrypted value for the first position
    answer[0] = windowSum

    // Slide the window forward for the remaining positions
    for (let i = 1; i < codeLength; i++) {
      // Drop the element leaving the window and add the entering one
      windowSum =
        windowSum -
        code[(i - steps - 1 + codeLength) % codeLength] +
        code[i - 1]

      // Store decrypted value for the current position
      answer[i] = windowSum
    }
  }

  // Return the decrypted code array
  return answer
}
