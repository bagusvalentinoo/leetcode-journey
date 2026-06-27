/**
 * Problem: 1037. Valid Boomerang
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isBoomerang(points [][]int) bool {
	// Check if cross product of vectors is non-zero
	// (x1 - x2) * (y1 - y3) != (x1 - x3) * (y1 - y2)
	return (points[0][0]-points[1][0])*(points[0][1]-points[2][1]) !=
		(points[0][0]-points[2][0])*(points[0][1]-points[1][1])
}
