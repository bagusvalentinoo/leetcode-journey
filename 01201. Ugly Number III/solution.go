/**
 * Problem: 1201. Ugly Number III
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func nthUglyNumber(n int, a int, b int, c int) int {
	// Calculate least common multiples for pairs and all three numbers.
	ab := lcm(a, b)   // LCM of a and b
	bc := lcm(b, c)   // LCM of b and c
	ac := lcm(a, c)   // LCM of a and c
	abc := lcm(ab, c) // LCM of a, b, and c

	// Initialize binary search bounds.
	var left, right int = 1, 2e9

	// Binary search to find the nth ugly number.
	for left < right {
		mid := (left + right) >> 1 // Calculate mid-point

		// Count numbers <= mid divisible by a, b, or c using inclusion-exclusion.
		count := mid/a + mid/b + mid/c - mid/ab - mid/bc - mid/ac + mid/abc

		// If count is enough, move right bound; else, move left bound.
		if count >= n {
			right = mid
		} else {
			left = mid + 1
		}
	}

	return left // The nth ugly number
}

func gcd(a, b int) int {
	if b == 0 {
		return a // Base case: b is zero
	}

	return gcd(b, a%b) // Recursive call
}

func lcm(a, b int) int {
	return a * b / gcd(a, b) // LCM formula using GCD
}
