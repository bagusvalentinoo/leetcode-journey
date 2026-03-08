/**
 * Problem: 1980. Find Unique Binary String
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds a binary string of length n that is not in the given array
 *
 * @param {string[]} nums - Array of unique binary strings of length n
 *
 * @returns {string} Binary string of length n not in the array
 */
const findDifferentBinaryString = (nums) => {
  // Get length of binary strings
  const { length } = nums
  // Set to store seen numbers
  const seenNumbers = new Set()

  // Add all numbers from nums to set
  for (const binary of nums) seenNumbers.add(parseInt(binary, 2))

  // Check all possible numbers from 0 to 2^n - 1
  for (let i = 0; i < 1 << length; i++) {
    // If number not in set, it's our answer
    if (!seenNumbers.has(i)) {
      // Convert to binary string and pad with leading zeros
      const binary = i.toString(2)

      // Return padded binary string
      return binary.padStart(length, '0')
    }
  }

  // If no answer found, return empty string
  return ''
}
