/**
 * Problem: 1779. Find Nearest Point That Has the Same X or Y Coordinate
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func nearestValidPoint(x int, y int, points [][]int) int {
  // Track smallest distance found and its index, default to no valid point
  smallestDistance, answerIndex := 1<<31-1, -1

  // Scan each point in order to keep smallest index on ties
  for i := 0; i < len(points); i++ {
    // Read coordinates of current point
    pointX, pointY := points[i][0], points[i][1]

    // Skip points sharing neither x nor y with current location
    if pointX != x && pointY != y {
      continue
    }

    // Compute Manhattan distance to current location
    distance := abs(pointX-x) + abs(pointY-y)

    // Update answer only on strictly smaller distance to keep first index on ties
    if distance < smallestDistance {
      smallestDistance, answerIndex = distance, i
    }
  }

  // Return index of nearest valid point, or -1 when no valid point exists
  return answerIndex
}

// Helper function to compute absolute value of an integer
func abs(value int) int {
  // Return negated value for negatives, value itself otherwise
  if value < 0 {
    return -value
  }
  return value
}
