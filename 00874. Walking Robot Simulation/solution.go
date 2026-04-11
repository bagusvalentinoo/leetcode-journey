/**
 * Problem: 874. Walking Robot Simulation
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func robotSim(commands []int, obstacles [][]int) int {
	// Create map to store obstacle positions for O(1) lookup
	oMap := make(map[int]bool)

	// Add each obstacle to the map using hash
	for _, o := range obstacles {
		oMap[getHash(o[0], o[1])] = true
	}

	// Initial facing direction (North)
	dirX, dirY := 0, 1
	// Robot's starting position
	posX, posY := 0, 0

	// Track maximum squared distance from origin
	maxDist := 0

	// Process each command in sequence
	for _, c := range commands {
		// Turn left command
		if c == -2 {
			dirX, dirY = -dirY, dirX
		} else if c == -1 {
			// Turn right command
			dirX, dirY = dirY, -dirX
		} else if c >= 1 && c <= 9 {
			// Movement command: move forward c steps

			// Initialize step counter
			j := 1

			// Check each step for obstacles
			for j <= c {
				// If next step hits an obstacle, stop moving
				if oMap[getHash(posX+j*dirX, posY+j*dirY)] {
					break
				}

				// Move to next step
				j++
			}

			// Update position to last valid step
			posX, posY = posX+(j-1)*dirX, posY+(j-1)*dirY

			// Update maximum distance if current position is farther
			maxDist = max(maxDist, posX*posX+posY*posY)
		}
	}

	// Return the maximum squared distance
	return maxDist
}

// Helper function to create unique hash for coordinate pair
func getHash(x, y int) int {
	return x*60013 + y
}
