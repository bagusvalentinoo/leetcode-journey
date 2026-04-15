/**
 * Problem: 2515. Shortest Distance to Target String in a Circular Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func closestTarget(words []string, target string, startIndex int) int {
	// Get length of words array
	arrayLength := len(words)

	// Initialize answer to maximum value
	minSteps := int(^uint(0) >> 1) // Max int

	// Iterate through all indices
	for i := 0; i < arrayLength; i++ {
		// Check if current word matches target
		if words[i] == target {
			// Calculate clockwise distance
			clockwiseSteps := (i - startIndex + arrayLength) % arrayLength
			// Calculate anticlockwise distance
			anticlockwiseSteps := (startIndex - i + arrayLength) % arrayLength

			// Start with clockwise steps as initial value
			steps := clockwiseSteps

			// If anticlockwise steps are smaller, use anticlockwise instead
			if anticlockwiseSteps < steps {
				steps = anticlockwiseSteps
			}
			// If current steps are smaller than minimum found so far, update minimum
			if steps < minSteps {
				minSteps = steps
			}
		}
	}

	// If minSteps is still at its maximum value (no target found), return -1
	if minSteps == int(^uint(0)>>1) {
		return -1
	}

	// Otherwise, return the minimum steps found
	return minSteps
}
