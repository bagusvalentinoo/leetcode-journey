/**
 * Problem: 1041. Robot Bounded In Circle
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isRobotBounded(instructions string) bool {
	// Directions: 0 - North, 1 - East, 2 - South, 3 - West
	directions := [][2]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
	x, y, dir := 0, 0, 0

	for _, instruction := range instructions {
		if instruction == 'G' {
			x += directions[dir][0]
			y += directions[dir][1]
		} else if instruction == 'L' {
			dir = (dir + 3) % 4 // Turn left
		} else if instruction == 'R' {
			dir = (dir + 1) % 4 // Turn right
		}
	}

	// Check if the robot is back at the origin or facing a different direction
	return (x == 0 && y == 0) || dir != 0
}
