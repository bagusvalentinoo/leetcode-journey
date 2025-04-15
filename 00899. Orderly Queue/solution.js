/**
 * Problem: 899. Orderly Queue
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns lexicographically smallest string after moving up to k characters.
 *
 * @param {string} s - Input string
 * @param {number} k - Number of characters that can be moved
 *
 * @returns {string} - Lexicographically smallest string
 */
const orderlyQueue = (s, k) => {
  // If k > 1, we can sort the string
  if (k === 1) {
    let smallest = s // Current smallest string

    // Try all rotations
    for (let i = 1; i < s.length; i++) {
      // Rotate string by i positions
      const rotated = s.slice(i) + s.slice(0, i)

      // Update smallest if current rotation is smaller
      if (rotated < smallest) smallest = rotated
    }

    // Return lexicographically smallest string
    return smallest
  }

  // Return sorted string
  return s.split('').sort().join('')
}
