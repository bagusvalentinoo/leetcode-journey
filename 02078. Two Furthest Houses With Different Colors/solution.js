/**
 * Problem: 2078. Two Furthest Houses With Different Colors
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Max distance between different colors
 *
 * @param {number[]} colors - Color array
 *
 * @returns {number} Maximum distance
 */
const maxDistance = (colors) => {
  // Get length of colors array
  const { length } = colors

  // Check from start to find first color that differs from end or start
  for (let i = 0; i < length; i++)
    // If current color differs from last color or first color
    if ((colors[i] ^ colors.at(-1)) | (colors.at(-1 - i) ^ colors[0]))
      // Return the maximum distance
      return length - 1 - i
}
