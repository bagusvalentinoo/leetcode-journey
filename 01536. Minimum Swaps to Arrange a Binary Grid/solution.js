/**
 * Problem: 1536. Minimum Swaps to Arrange a Binary Grid
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum swaps to make all rows have enough trailing zeros
 *
 * @param {number[][]} grid - Binary matrix
 *
 * @returns {number} Minimum swaps needed or -1 if impossible
 */
const minSwaps = (grid) => {
  // Get grid size
  const size = grid.length

  // Array to store trailing zeros count for each row
  const trailingZeros = new Array(size).fill(0)

  // Calculate trailing zeros for each row
  for (let row = 0; row < size; row++) {
    // Count of trailing zeros for current row
    let zeroCount = 0

    // Count trailing zeros from rightmost column to leftmost column
    for (let col = size - 1; col >= 0; col--) {
      // If zero, increment count
      if (grid[row][col] === 0) zeroCount++
      // If one, break
      else break
    }

    trailingZeros[row] = zeroCount
  }

  // Track total swaps performed
  let swaps = 0

  // Process each row from top to bottom
  for (let row = 0; row < size; row++) {
    // Required trailing zeros for current row
    const requiredZeros = size - row - 1

    // Find row with enough trailing zeros at or below current position
    let foundIndex = -1

    // Search for row with enough trailing zeros
    for (let j = row; j < size; j++) {
      // If found, store index and break
      if (trailingZeros[j] >= requiredZeros) {
        // Store index of found row
        foundIndex = j

        // Break loop
        break
      }
    }

    // If no suitable row found, configuration is impossible
    if (foundIndex === -1) return -1

    // Bubble up the found row to its correct position
    while (foundIndex > row) {
      // Swap with row above
      ;[trailingZeros[foundIndex], trailingZeros[foundIndex - 1]] = [
        trailingZeros[foundIndex - 1],
        trailingZeros[foundIndex]
      ]

      // Move found row up
      foundIndex--
      // Increment swap count
      swaps++
    }
  }

  // Return total swaps performed
  return swaps
}
