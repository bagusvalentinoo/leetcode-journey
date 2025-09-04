/**
 * Problem: 3516. Find Closest Person
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findClosest(x, y, z int) int {
	// Calculate the absolute distance between person 1 (x) and the target (z)
	distancePerson1 := int(math.Abs(float64(z - x)))
	// Calculate the absolute distance between person 2 (y) and the target (z)
	distancePerson2 := int(math.Abs(float64(z - y)))

	// If person 1 is closer to the target, return 1
	if distancePerson1 < distancePerson2 {
		return 1
	// If person 2 is closer to the target, return 2
	} else if distancePerson1 > distancePerson2 {
		return 2
	}

	// If both persons are equally close to the target, return 0
	return 0
}
