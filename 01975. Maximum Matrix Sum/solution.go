/**
 * Problem: 1975. Maximum Matrix Sum
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxMatrixSum(matrix [][]int) int64 {
	// Initialize variables
	var totalSum int64 = 0       // Total sum of absolute values
	neg := 0                     // Count of negative numbers
	minAbs := int(^uint(0) >> 1) // Initialize with maximum possible int value

	// Iterate through all elements in the matrix
	for _, row := range matrix {
		for _, v := range row {
			// Count negative numbers
			if v < 0 {
				neg++
			}
			// Calculate absolute value
			av := v
			if av < 0 {
				av = -av
			}
			// Add absolute value to total sum
			totalSum += int64(av)
			// Update minimum absolute value
			if av < minAbs {
				minAbs = av
			}
		}
	}

	// If even number of negatives, we can make all values positive
	if neg%2 == 0 {
		return totalSum
	}

	// If odd number of negatives, subtract twice the minimum absolute value
	// (flip smallest value to negative to minimize loss)
	return totalSum - 2*int64(minAbs)
}
