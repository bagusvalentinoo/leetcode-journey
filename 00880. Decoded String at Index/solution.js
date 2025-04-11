/**
 * Problem: 880. Decoded String at Index
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds k-th letter in decoded string without constructing it
 *
 * @param {string} s - Encoded string
 * @param {number} k - 1-indexed position of desired letter
 *
 * @returns {string} - k-th letter in decoded string
 */
const decodeAtIndex = (s, k) => {
  // Store the length of the decoded string up to each character
  const lengths = new Map()
  let length = 0
  let lastChar = ''

  // Iterate until we reach or exceed k
  for (let i = 0; length < k; i++) {
    const num = +s[i]

    // If current character is a letter
    if (isNaN(num)) {
      length++
      lastChar = s[i]
      continue
    }

    // Store length up to current character
    if (!lengths.has(i)) lengths.set(i, length)

    // Calculate how many times the current segment can be repeated
    const times = Math.min(num - 1, Math.floor((k - length) / lengths.get(i)))
    length += times * lengths.get(i)

    // If we can't fully repeat the segment, reset and continue
    if (times < num - 1) i = -1
  }

  // Return the k-th letter
  return lastChar
}
