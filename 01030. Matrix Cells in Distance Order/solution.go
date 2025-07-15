/**
 * Problem: 1030. Matrix Cells in Distance Order
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// dist calculates the Manhattan distance between two points (r1, c1) and (r2, c2)
// Manhattan distance is the sum of absolute differences of their coordinates
func dist(r1, c1, r2, c2 int) int {
	// Calculate absolute difference for rows and columns using conditional logic
	// This avoids using math.Abs which requires float64 conversion
	if r1 < r2 {
		if c1 < c2 {
			return c2 - c1 + r2 - r1
		} else {
			return c1 - c2 + r2 - r1
		}
	} else {
		if c1 < c2 {
			return c2 - c1 + r1 - r2
		} else {
			return c1 - c2 + r1 - r2
		}
	}
}

// isLessFact returns a comparison function for sorting cells by distance from center
// This is a factory function that creates a closure with the center coordinates
func isLessFact(rCenter, cCenter int) func(a, b []int) bool {
	return func(a, b []int) bool {
		// Compare distances of two cells from the center point
		return dist(a[0], a[1], rCenter, cCenter) < dist(b[0], b[1], rCenter, cCenter)
	}
}

// allCellsDistOrder returns all cells of a matrix sorted by Manhattan distance from center
func allCellsDistOrder(rows int, cols int, rCenter int, cCenter int) [][]int {
	// Create a flat backend array to store all coordinates efficiently
	// Size is rows * cols * 2 because each cell needs 2 values (row, col)
	backend := make([]int, rows*cols*2, rows*cols*2)
	
	// Populate backend array with all cell coordinates
	// Use single loop with two indices for efficiency
	for i, r := 0, 0; r < rows; r++ {
		for c := 0; c < cols; c, i = c+1, i+2 {
			backend[i] = r     // Store row coordinate
			backend[i+1] = c   // Store column coordinate
		}
	}

	// Create result slice where each element is a slice pointing to backend coordinates
	// This avoids memory allocation for individual coordinate pairs
	result := make([][]int, rows*cols, rows*cols)
	for i := range len(result) {
		// Each result[i] points to a 2-element slice in backend
		// i<<1 is equivalent to i*2 but faster (bit shift)
		result[i] = backend[i<<1 : i<<1+2]
	}

	// Get comparison function for sorting by distance from center
	isLess := isLessFact(rCenter, cCenter)
	
	// Implement iterative quicksort using a stack
	// Stack stores pairs of (low, high) indices as int16 for memory efficiency
	s := []int16{0, int16(len(result) - 1)}
	
	// Process stack until empty
	for 0 < len(s) {
		// Pop the last range from stack
		l := len(s) - 2
		lo, hi := s[l], s[l+1]
		s = s[:l]
		
		// Three-way partitioning (Dutch National Flag algorithm)
		// pivot: the partition element
		// lt: boundary for elements less than pivot
		// eq: current element being processed
		// gt: boundary for elements greater than pivot
		pivot, lt, eq, gt := result[lo+(hi-lo)>>1], lo, lo, hi
		
		// Partition elements into three groups: <pivot, =pivot, >pivot
		for eq <= gt {
			switch {
			case isLess(result[eq], pivot):
				// Current element is less than pivot, swap with lt boundary
				result[eq], result[lt] = result[lt], result[eq]
				lt++
				eq++

			case isLess(pivot, result[eq]):
				// Current element is greater than pivot, swap with gt boundary
				result[eq], result[gt] = result[gt], result[eq]
				gt--

			default:
				// Current element equals pivot, just move to next
				eq++
			}
		}
		
		// Push sub-ranges to stack if they contain more than one element
		if lo < lt-1 {
			s = append(s, lo, lt-1)
		}
		if gt+1 < hi {
			s = append(s, gt+1, hi)
		}
	}

	return result
}
