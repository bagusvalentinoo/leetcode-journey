/**
 * Problem: 2103. Rings and Rods
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count rods that contain red, green, and blue rings
 *
 * @param {string} rings - Color and rod pairs
 *
 * @returns {number} Number of rods with all three colors
 */
const countPoints = (rings) => {
  // Store a three-bit color mask for each rod
  const rodColors = new Int32Array(10)

  // Record each ring color on its corresponding rod
  for (let i = 0; i < rings.length; i += 2) {
    // Convert the color into its bit and the rod character into an index
    const colorBit = rings[i] === 'R' ? 1 : rings[i] === 'G' ? 2 : 4
    const rod = Number(rings[i + 1])
    rodColors[rod] |= colorBit
  }

  // Count rods whose mask contains every color bit
  let count = 0
  for (const colors of rodColors) if (colors === 7) count++

  // Return the number of rods containing all three colors
  return count
}
