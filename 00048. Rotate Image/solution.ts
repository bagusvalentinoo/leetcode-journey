/**
 * Problem: 48. Rotate Image
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Rotates matrix 90 degrees clockwise in-place
 *
 * @param matrix - Square matrix to rotate
 *
 * @returns void
 */
const rotate = (matrix: number[][]): void => {
  // Get matrix size
  const size: number = matrix.length

  // Process each layer from outermost to innermost
  for (let layer: number = 0; layer < Math.floor(size / 2); layer++) {
    // Process each element in current layer
    for (let offset: number = layer; offset < size - layer - 1; offset++) {
      // Store top element temporarily
      const top: number = matrix[layer][offset]

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
