/**
 * Problem: 1496. Path Crossing
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isPathCrossing(path string) bool {
  // Track visited positions using hash set
  visited := map[string]bool{"0_0": true}

  // Start at origin
  x, y := 0, 0

  // Process each direction
  for _, dir := range path {
    // Update position based on direction
    switch dir {
    // Move north: increment y coordinate
    case 'N':
      y++
    // Move south: decrement y coordinate
    case 'S':
      y--
    // Move west: decrement x coordinate
    case 'W':
      x--
    // Move east: increment x coordinate
    case 'E':
      x++
    }

    // Create position key and check if position already visited, mark as visited
    pos := fmt.Sprintf("%d_%d", x, y)

    // Check if position already visited
    if visited[pos] {
      return true
    }

    // Mark position as visited
    visited[pos] = true
  }

  // Path doesn't cross itself
  return false
}
