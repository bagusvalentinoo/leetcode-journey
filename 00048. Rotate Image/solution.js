/**
 * Problem: 48. Rotate Image
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Rotates matrix 90 degrees clockwise in-place
 *
 * @param {number[][]} matrix - Square matrix to rotate
 *
 * @returns {void}
 */
const rotate = (matrix) => {
  // Get matrix size
  const size = matrix.length

  // Process each layer from outermost to innermost
  for (let layer = 0; layer < Math.floor(size / 2); layer++) {
    // Process each element in current layer
    for (let offset = layer; offset < size - layer - 1; offset++) {
      // Store top element temporarily
      const top = matrix[layer][offset]

      // Move left element to top
      matrix[layer][offset] = matrix[size - offset - 1][layer]
      // Move bottom element to left
      matrix[size - offset - 1][layer] =
        matrix[size - layer - 1][size - offset - 1]
      // Move right element to bottom
      matrix[size - layer - 1][size - offset - 1] =
        matrix[offset][size - layer - 1]
      // Move stored top element to right
      matrix[offset][size - layer - 1] = top
    }
  }
}
