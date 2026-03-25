/**
 * Problem: 48. Rotate Image
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func rotate(matrix [][]int) {
	// Get matrix size
	size := len(matrix)

	// Process each layer from outermost to innermost
	for layer := 0; layer < size/2; layer++ {
		// Process each element in current layer
		for offset := layer; offset < size-layer-1; offset++ {
			// Store top element temporarily
			top := matrix[layer][offset]

			// Move left element to top
			matrix[layer][offset] = matrix[size-offset-1][layer]
			// Move bottom element to left
			matrix[size-offset-1][layer] = matrix[size-layer-1][size-offset-1]
			// Move right element to bottom
			matrix[size-layer-1][size-offset-1] = matrix[offset][size-layer-1]
			// Move stored top element to right
			matrix[offset][size-layer-1] = top
		}
	}
}
