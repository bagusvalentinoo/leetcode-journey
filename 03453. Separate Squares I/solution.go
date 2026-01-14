/**
 * Problem: 3453. Separate Squares I
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 82 ms (Beats 100%)
 */

func separateSquares(squares [][]int) float64 {
	// Calculate total area and maximum y-coordinate
	maxY, totalArea := 0.0, 0.0
	for _, square := range squares {
		y, side := square[1], square[2]
		totalArea += float64(side * side)
		
		// Track the highest point any square reaches
		if bottom := float64(y + side); bottom > maxY {
			maxY = bottom
		}
	}

	// Helper function to check if area below limitY is at least half total area
	isHalfAreaBelow := func(limitY float64) bool {
		coveredArea := 0.0
		for _, square := range squares {
			y, side := square[1], square[2]
			
			// Skip squares entirely above the limit
			if float64(y) >= limitY {
				continue
			}
			
			// Calculate overlapping height between square and region below limitY
			squareBottom := float64(y + side)
			overlapHeight := math.Min(limitY, squareBottom) - float64(y)
			coveredArea += float64(side) * overlapHeight
		}
		
		return coveredArea >= totalArea/2.0
	}

	// Binary search for the y-coordinate where covered area equals half total area
	low, high := 0.0, maxY
	epsilon := 1e-5
	
	for math.Abs(high-low) > epsilon {
		mid := (high + low) / 2.0
		if isHalfAreaBelow(mid) {
			high = mid // Too high, need to lower the boundary
		} else {
			low = mid // Too low, need to raise the boundary
		}
	}
	
	return high
}
