/**
 * Problem: 3000. Maximum Area of Longest Diagonal Rectangle
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func areaOfMaxDiagonal(dimensions [][]int) int {
	// Initialize maxArea to store the maximum area found, and maxDiag to store the largest diagonal squared value.
	maxArea, maxDiag := 0, 0

	// Iterate over each rectangle's dimensions in the input slice.
	for _, dimension := range dimensions {
		// Assign length and width from the current dimension.
		length, width := dimension[0], dimension[1]
		// Calculate the squared length of the diagonal using the Pythagorean theorem.
		currentDiagonal := length*length + width*width

		// Update maxDiag and maxArea if a longer diagonal is found,
		// or if the diagonal is equal but the area is larger.
		if currentDiagonal > maxDiag || (currentDiagonal == maxDiag && length*width > maxArea) {
			maxDiag = currentDiagonal
			maxArea = length * width
		}
	}
	
	// Return the area of the rectangle with the longest diagonal (or largest area if tie).
	return maxArea
}
