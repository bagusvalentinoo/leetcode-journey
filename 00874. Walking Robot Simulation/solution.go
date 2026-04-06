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
	// Direction vectors: North, East, South, West
	dirs := [4][2]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}

	// Set to store obstacle positions for O(1) lookup
	obSet := make(map[[2]int]bool, len(obstacles))

	// Convert each obstacle to a map key
	for _, o := range obstacles {
		obSet[[2]int{o[0], o[1]}] = true
	}

	// Robot's current position
	x, y := 0, 0

	// Current direction index (0: North, 1: East, 2: South, 3: West)
	dir := 0
	// Track maximum squared distance from origin
	maxDist := 0

	// Process each command in sequence
	for _, cmd := range commands {
		// Handle different command types using switch
		switch cmd {
		// Turn left (-2)
		case -2:
			dir = (dir + 3) % 4
		// Turn right (-1)
		case -1:
			dir = (dir + 1) % 4
		// Move forward (positive integer: number of steps)
		default:
			// Get direction vector for current facing direction
			dx, dy := dirs[dir][0], dirs[dir][1]

			// Move step by step
			for i := 0; i < cmd; i++ {
				// Calculate next position
				nx, ny := x+dx, y+dy

				// Stop if next position is blocked by obstacle
				if obSet[[2]int{nx, ny}] {
					break
				}

				// Update robot's position
				x, y = nx, ny

				// Calculate squared distance from origin
				dist := x*x + y*y

				// Update maximum distance if current is larger
				if dist > maxDist {
					maxDist = dist
				}
			}
		}
	}

	// Return the maximum squared distance from origin
	return maxDist
}
