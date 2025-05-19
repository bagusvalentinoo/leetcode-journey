/**
 * Problem: 3024. Type of Triangle
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func triangleType(nums []int) string {
	// Extract the three side lengths
	a, b, c := nums[0], nums[1], nums[2]

	// Check triangle inequality (invalid triangle)
	if a+b <= c || a+c <= b || b+c <= a {
		return "none"
	}
	// Check for equilateral triangle (all sides equal)
	if a == b && b == c {
		return "equilateral"
	}
	// Check for isosceles triangle (exactly two sides equal)
	if a == b || b == c || a == c {
		return "isosceles"
	}

	// If none of the above, it's a scalene triangle
	return "scalene"
}